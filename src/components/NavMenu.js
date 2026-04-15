import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 1.2rem;
  left: 0;
  width: 100%;
  padding: 0.8rem 0;
  ul {
    max-width: 720px;
    margin: 0 auto;
    width: 90%;
    background: rgba(12, 18, 28, 0.8);
    backdrop-filter: blur(14px);
    border: 1px solid var(--surface-border);
    box-shadow: var(--shadow-soft);
    border-radius: 999px;
    padding: 0.7rem;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 999px;
      transition: 0.25s ease background-color;
      &:hover {
        background-color: rgba(99, 209, 191, 0.18);
      }
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
      transition: 0.2s ease color;
    }
    .active {
      color: var(--white);
      background: linear-gradient(135deg, rgba(74, 193, 176, 0.35), rgba(61, 127, 203, 0.35));
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 2rem;
    top: 0.7rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    border-radius: 8px;
    background: rgba(12, 18, 28, 0.75);
    border: 1px solid var(--surface-border);
    padding: 0.2rem;
    * {
        pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    top: 0;
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1.2rem;
      transition: 0.3s ease transform;
      background: rgba(12, 18, 28, 0.95);
      backdrop-filter: blur(14px);
      border: 1px solid var(--surface-border);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 18px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
