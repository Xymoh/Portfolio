import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.8rem;
    background: ${(props) =>
      props.outline
        ? "transparent"
        : "linear-gradient(135deg, var(--accent) 0%, #57b0da 100%)"};
    padding: 0.75em 1.8em;
    border-radius: 999px;
    display: inline-block;
    border: 2px solid
      ${(props) => (props.outline ? "var(--ink-2)" : "transparent")};
    color: ${(props) => (props.outline ? "var(--white)" : "#092022")};
    text-decoration: none;
    transition: 0.25s ease transform, 0.25s ease box-shadow,
      0.25s ease background;
    box-shadow: ${(props) =>
      props.outline ? "none" : "0 12px 24px rgba(70, 179, 189, 0.3)"};
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 26px rgba(0, 0, 0, 0.34);
      background: ${(props) =>
        props.outline
          ? "rgba(255, 255, 255, 0.06)"
          : "linear-gradient(135deg, #74dfcc 0%, #6ebee3 100%)"};
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.6rem;
    }
  }
`;

export default function Button({
  btnLink = "test",
  btnText = "Test",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
