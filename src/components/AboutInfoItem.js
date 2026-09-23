import styled from "styled-components";

import PText from "./PText";
import { glassLite } from "../styles/glass";

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  gap: 2rem;
  .title {
    font-size: 2.4rem;
    min-width: 18rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    margin-left: 3rem;
    left: 18rem;
    flex-wrap: wrap;
  }
  .item {
    ${glassLite}
    padding: 0.9rem 1.3rem;
    border-radius: 999px;
    transition: transform 0.7s var(--ease-smooth), border-color 0.7s var(--ease-smooth),
      background 0.7s var(--ease-smooth);
    .para p {
      color: var(--gray-1);
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--glass-border-hover);
      transform: translateY(-3px) scale(1.03);
    }
  }
  ${(props) =>
    props.$variant === "list" &&
    `
      align-items: flex-start;
      .title {
        margin-top: 0.2rem;
      }
      .items {
        flex-direction: column;
        flex-wrap: nowrap;
        margin-left: 0;
        width: 100%;
        max-width: 860px;
        gap: 1rem;
      }
      .item {
        width: 100%;
        padding: 1.1rem 1.4rem;
        border-radius: var(--radius-md);
        border-left: 3px solid var(--accent);
      }
    `}
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .title {
      min-width: 0;
    }
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
  variant = "chips",
}) {
  return (
    <AboutItemStyles $variant={variant}>
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
