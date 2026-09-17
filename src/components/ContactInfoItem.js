import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

import PText from "./PText";
import { glass, glassHover, iconWell } from "../styles/glass";

const ItemStyles = styled.div`
    ${glass}
    ${glassHover}
    padding: 1.8rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: var(--radius-lg);
    margin-bottom: 2rem;
    .icon {
        ${iconWell}
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 999px;
        svg {
            width: 2.6rem;
            height: 2.6rem;
        }
    }
    .para {
        margin: 0;
    }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "this is an info",
}) {
  return (
    <ItemStyles className="glass">
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
