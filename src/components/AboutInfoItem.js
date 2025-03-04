import React from "react";
import styled from "styled-components";

import PText from "./PText";

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    margin-left: 3rem;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    &:hover {
      background-color: var(--gray-2);
      transform: translateY(-3px);
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      display: inline;
      position: initial;
      gap: 1rem;
      margin-left: 0;
    }
    .item {
      margin-bottom: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = "This is title",
  items = ["Item1", "Item2"],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) =>
          index === 4 ? (
            <div className="item" key={index}>
              <PText>{item}</PText>
              <br />
            </div>
          ) : (
            <div className="item" key={index}>
              <PText>{item}</PText>
            </div>
          )
        )}
      </div>
    </AboutItemStyles>
  );
}
