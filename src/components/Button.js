import { Link } from "react-router-dom";
import styled from "styled-components";

import { buttonGlass, buttonPrimary } from "../styles/glass";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    ${(props) => (props.$outline ? buttonGlass : buttonPrimary)}
  }
`;

export default function Button({
  btnLink = "/",
  btnText = "Button",
  outline = false,
  href,
}) {
  return (
    <ButtonStyle $outline={outline} className="button-wrapper">
      {href ? (
        <a className="button" href={href} target="_blank" rel="noreferrer">
          {btnText}
        </a>
      ) : (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      )}
    </ButtonStyle>
  );
}
