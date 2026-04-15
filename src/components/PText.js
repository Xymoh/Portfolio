import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 620px;
  margin: 0 auto;
  font-size: 1.7rem;
  line-height: 1.65;
  @media only screen and (max-width: 768px) {
    font-size: 1.45rem;
  }
`;

export default function PText({ children }) {

  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
