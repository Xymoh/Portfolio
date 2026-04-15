import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ColStyle = styled.div`
.heading {
  font-size: 2.4rem;
  margin-bottom: 2rem;
  color: var(--white);
}
li {
  margin-bottom: 1rem;
}
a {
  font-size: 1.6rem;
  color: var(--ink-1);
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  display: inline-block;
  transition: 0.25s ease background-color, 0.25s ease color;
      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
        color: var(--white);
      }
}
`;

export default function FooterCol({
  heading = "col heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <ColStyle>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === "Link" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
