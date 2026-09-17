import React from "react";
import styled from "styled-components";
import { MdCheck } from "react-icons/md";

import services from "../assets/data/services";
import Reveal from "./Reveal";
import { glass, glassHover, glassLite, iconWell } from "../styles/glass";

const ServicesDetailStyles = styled.div`
  .servicesDetail__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.6rem;
    margin-top: 6rem;
  }
  .serviceCard {
    ${glass}
    ${glassHover}
    scroll-margin-top: 10rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 3rem 2.8rem;
    border-radius: var(--radius-lg);
  }
  .serviceCard--highlight {
    border-color: rgba(99, 209, 191, 0.45);
    box-shadow: var(--glass-rim), var(--glass-shadow),
      0 0 0 1px rgba(99, 209, 191, 0.12), 0 0 48px -12px rgba(99, 209, 191, 0.45);
  }
  .serviceCard__head {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  .serviceCard__icon {
    ${iconWell}
    width: 5.4rem;
    height: 5.4rem;
    transition: transform var(--hover-duration) var(--ease-smooth);
    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
  .serviceCard:hover .serviceCard__icon {
    transform: translateY(-2px) scale(1.06) rotate(-3deg);
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
      ${glassLite}
      font-size: 1.3rem;
      padding: 0.5rem 1.1rem;
      border-radius: 999px;
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
        {services.map((service, index) => {
          const Icon = service.icon;
          const cardClass = service.highlight
            ? "serviceCard serviceCard--highlight glass"
            : "serviceCard glass";
          return (
            <Reveal key={service.id} delay={(index % 2) * 100}>
              <article id={service.id} className={cardClass}>
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
            </Reveal>
          );
        })}
      </div>
    </ServicesDetailStyles>
  );
}
