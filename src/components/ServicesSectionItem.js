import React from "react";
import { Link } from "react-router-dom";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";

const ItemStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.6rem 2.2rem;
  text-align: left;
  background: var(--surface);
  border: 1px solid
    ${(props) =>
      props.$highlight ? "rgba(99, 209, 191, 0.55)" : "var(--surface-border)"};
  border-radius: 16px;
  box-shadow: var(--shadow-soft);
  transition: 0.25s ease transform, 0.25s ease box-shadow,
    0.25s ease border-color;
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 209, 191, 0.5);
    box-shadow: 0 20px 44px rgba(0, 0, 0, 0.45);
  }
  .servicesItem__icon {
    width: 5.2rem;
    height: 5.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(99, 209, 191, 0.14);
    color: var(--accent);
    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: var(--accent);
    }
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
    transition: 0.2s ease color;
    &:hover {
      color: var(--white);
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
    <ItemStyles $highlight={highlight}>
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
