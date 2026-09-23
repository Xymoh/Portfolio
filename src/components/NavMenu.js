import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

import { glass } from "../styles/glass";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 1.2rem;
  left: 0;
  width: 100%;
  padding: 0.8rem 0;
  .navItems {
    ${glass}
    --glass-bg: var(--glass-bg-strong);
    max-width: 780px;
    margin: 0 auto;
    width: 90%;
    border-radius: 999px;
    padding: 0.7rem;
    text-align: center;
    &::after {
      display: none;
    }
  }
  /* Glass pill that slides between the active links. */
  .navItems__indicator {
    position: absolute;
    z-index: 0;
    top: var(--top);
    left: var(--left);
    width: var(--w);
    height: var(--h);
    border-radius: 999px;
    pointer-events: none;
    opacity: var(--visible, 0);
    background: linear-gradient(
      135deg,
      rgba(99, 209, 191, 0.34),
      rgba(61, 127, 203, 0.34)
    );
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35),
      0 8px 20px -8px rgba(99, 209, 191, 0.55);
    &[data-animate="true"] {
      transition: left 0.55s var(--ease-spring), width 0.55s var(--ease-spring),
        opacity 0.3s var(--ease-out);
    }
  }
  li {
    position: relative;
    z-index: 1;
    display: inline-block;
    border-radius: 999px;
  }
  a {
    display: inline-block;
    font-family: "RobotoMono Regular";
    padding: 0.9rem 1.8rem;
    font-size: 1.7rem;
    color: var(--ink-1);
    outline: none;
    text-decoration: none;
    border-radius: 999px;
    transition: color 0.5s var(--ease-smooth), background-color 0.5s var(--ease-smooth),
      transform 0.6s var(--ease-smooth);
    &:hover {
      color: var(--white);
      background: rgba(255, 255, 255, 0.06);
    }
    &:active {
      transform: scale(0.95);
    }
  }
  a.active {
    color: var(--white);
  }
  .mobile-menu-icon,
  .closeNavIcon {
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }
  .mobile-menu-icon {
    ${glass}
    --glass-bg: var(--glass-bg-strong);
    position: absolute;
    right: 2rem;
    top: 0.4rem;
    width: 4.6rem;
    height: 4.6rem;
    padding: 0.9rem;
    border-radius: 999px;
    transition: transform 0.4s var(--ease-spring);
    &:active {
      transform: scale(0.9);
    }
    &::after {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    top: 0;
    padding: 0;
    .mobile-menu-icon {
      display: flex;
    }
    .navItems__indicator {
      display: none;
    }
    .navItems {
      --top: 1.2rem;
      position: absolute;
      right: 1rem;
      top: var(--top);
      width: 90%;
      max-width: 300px;
      border-radius: var(--radius-lg);
      padding: 1.6rem;
      text-align: left;
      transform-origin: top right;
      transition: transform 0.45s var(--ease-spring), opacity 0.3s var(--ease-out),
        visibility 0s linear 0s;
      &.hide-item {
        opacity: 0;
        transform: translateY(-10px) scale(0.94);
        pointer-events: none;
        visibility: hidden;
        transition: transform 0.35s var(--ease-out), opacity 0.25s var(--ease-out),
          visibility 0s linear 0.35s;
      }
    }
    .closeNavIcon {
      display: flex;
      width: 3.6rem;
      height: 3.6rem;
      padding: 0.6rem;
      margin: 0 0 0.8rem auto;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--glass-border);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    li {
      display: block;
      margin-bottom: 0.6rem;
    }
    a {
      display: block;
      padding: 1.1rem 1.6rem;
    }
    a.active {
      background: linear-gradient(
        135deg,
        rgba(99, 209, 191, 0.3),
        rgba(61, 127, 203, 0.3)
      );
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const [indicator, setIndicator] = useState(null);
  const [animate, setAnimate] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();

  // Measure the active link so the indicator can slide to it.
  useLayoutEffect(() => {
    const measure = () => {
      const nav = navRef.current;
      const active = nav && nav.querySelector("a.active");
      if (!active) {
        setIndicator(null);
        return;
      }
      const item = active.parentElement;
      setIndicator({
        left: item.offsetLeft,
        top: item.offsetTop,
        w: item.offsetWidth,
        h: item.offsetHeight,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  // Enable the slide transition only after the first paint, so the
  // indicator appears in place instead of flying in from the corner.
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const indicatorStyle = indicator
    ? {
        "--left": `${indicator.left}px`,
        "--top": `${indicator.top}px`,
        "--w": `${indicator.w}px`,
        "--h": `${indicator.h}px`,
        "--visible": 1,
      }
    : undefined;

  return (
    <NavMenuStyles>
      <button
        type="button"
        className="mobile-menu-icon"
        aria-label="Open menu"
        aria-expanded={showNav}
        onClick={() => setShowNav(true)}
      >
        <MdMenu />
      </button>
      <nav
        ref={navRef}
        className={showNav ? "navItems" : "navItems hide-item"}
        aria-label="Main"
      >
        <button
          type="button"
          className="closeNavIcon"
          aria-label="Close menu"
          onClick={() => setShowNav(false)}
        >
          <MdClose />
        </button>
        <span
          className="navItems__indicator"
          data-animate={animate}
          style={indicatorStyle}
          aria-hidden="true"
        />
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setShowNav(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </NavMenuStyles>
  );
}
