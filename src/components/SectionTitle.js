import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: "RobotoMono Regular";
    font-size: 1.6rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  h2 {
    font-family: "Montserrat Bold";
    font-size: 5.6rem;
    margin-top: 0.9rem;
    text-transform: uppercase;
    color: var(--white);
    text-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.1rem;
    }
    h2 {
      font-size: 3.4rem;
    }
  }
`;

export default function SectionTitle({
  subheading = "This is subheading",
  heading = "This is heading",
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
