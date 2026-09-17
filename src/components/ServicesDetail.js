import React from "react";
import styled from "styled-components";
import { MdCheck } from "react-icons/md";

import services from "../assets/data/services";

const ServicesDetailStyles = styled.div`
  .servicesDetail__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.6rem;
    margin-top: 6rem;
  }
  .serviceCard {
    scroll-margin-top: 10rem;
    display: flex;
    flex-direction: column;
    padding: 3rem 2.8rem;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: 18px;
    box-shadow: var(--shadow-soft);
    transition: 0.25s ease border-color;
    &:hover {
      border-color: rgba(99, 209, 191, 0.5);
    }
  }
  .serviceCard--highlight {
    border-color: rgba(99, 209, 191, 0.55);
    background: linear-gradient(
      160deg,
      rgba(99, 209, 191, 0.1) 0%,
      rgba(255, 255, 255, 0.03) 60%
    );
  }
  .serviceCard__head {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  .serviceCard__icon {
    flex-shrink: 0;
    width: 5.4rem;
    height: 5.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(99, 209, 191, 0.14);
    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: var(--accent);
    }
  }
  .serviceCard__tag {
    font-size: 1.2rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-2);
  }
  .serviceCard--highlight .serviceCard__tag {
    color: var(--accent-2);
  }
  .serviceCard__title {
    font-size: 2.6rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
  }
  .serviceCard__desc {
    margin-top: 2rem;
    font-size: 1.55rem;
    line-height: 1.65;
    color: var(--ink-1);
  }
  .serviceCard__listTitle {
    margin-top: 2.4rem;
    font-size: 1.3rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .serviceCard__list {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    li {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      font-size: 1.5rem;
      line-height: 1.55;
      color: var(--gray-1);
    }
    svg {
      flex-shrink: 0;
      width: 1.8rem;
      height: 1.8rem;
      margin-top: 0.3rem;
      color: var(--accent);
    }
  }
  .serviceCard__stack {
    margin-top: auto;
    padding-top: 2.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    span {
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      border-radius: 999px;
      background: var(--deep-dark);
      border: 1px solid var(--surface-border);
      color: var(--ink-1);
    }
  }
  @media only screen and (max-width: 900px) {
    .servicesDetail__grid {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (max-width: 768px) {
    .serviceCard {
      padding: 2.4rem 2rem;
    }
    .serviceCard__title {
      font-size: 2.2rem;
    }
  }
`;

export default function ServicesDetail() {
  return (
    <ServicesDetailStyles>
      <div className="servicesDetail__grid">
        {services.map((service) => {
          const Icon = service.icon;
          const cardClass = service.highlight
            ? "serviceCard serviceCard--highlight"
            : "serviceCard";
          return (
            <article key={service.id} id={service.id} className={cardClass}>
              <div className="serviceCard__head">
                <div className="serviceCard__icon">
                  <Icon />
                </div>
                <div>
                  <p className="serviceCard__tag">{service.tag}</p>
                  <h3 className="serviceCard__title">{service.title}</h3>
                </div>
              </div>
              <p className="serviceCard__desc">{service.desc}</p>
              <p className="serviceCard__listTitle">What I can do</p>
              <ul className="serviceCard__list">
                {service.includes.map((item) => (
                  <li key={item}>
                    <MdCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="serviceCard__stack">
                {service.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </ServicesDetailStyles>
  );
}
