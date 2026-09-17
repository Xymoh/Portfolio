import React from "react";
import { Link } from "react-router-dom";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";

import { glass, glassHover, iconWell } from "../styles/glass";

const ItemStyles = styled.div`
  ${glass}
  ${glassHover}
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.6rem 2.2rem;
  text-align: left;
  border-radius: var(--radius-lg);
  ${(props) =>
    props.$highlight &&
    `
      border-color: rgba(99, 209, 191, 0.45);
      box-shadow: var(--glass-rim), var(--glass-shadow),
        0 0 0 1px rgba(99, 209, 191, 0.12), 0 0 40px -12px rgba(99, 209, 191, 0.5);
    `}
  .servicesItem__icon {
    ${iconWell}
    width: 5.2rem;
    height: 5.2rem;
    transition: transform var(--hover-duration) var(--ease-smooth);
    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
  &:hover .servicesItem__icon {
    transform: translateY(-2px) scale(1.06) rotate(-3deg);
  }
  .servicesItem__tag {
    display: inline-block;
    margin-top: 2rem;
    font-size: 1.2rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${(props) => (props.$highlight ? "var(--accent-2)" : "var(--ink-2)")};
  }
  .servicesItem__title {
    font-size: 2.3rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
    margin-top: 0.6rem;
  }
  .servicesItem__desc {
    margin-top: 1.2rem;
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--ink-1);
    flex: 1;
  }
  .servicesItem__link {
    margin-top: 2rem;
    font-size: 1.4rem;
    color: var(--accent);
    transition: color 0.5s var(--ease-smooth), transform 0.7s var(--ease-smooth);
    display: inline-block;
    &:hover {
      color: var(--white);
      transform: translateX(3px);
    }
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = "Service",
  tag = "",
  desc = "",
  highlight = false,
  link = "/services",
}) {
  return (
    <ItemStyles $highlight={highlight} className="glass">
      <div className="servicesItem__icon">{icon}</div>
      {tag && <span className="servicesItem__tag">{tag}</span>}
      <h3 className="servicesItem__title">{title}</h3>
      <p className="servicesItem__desc">{desc}</p>
      <Link className="servicesItem__link" to={link}>
        Learn more &rarr;
      </Link>
    </ItemStyles>
  );
}
