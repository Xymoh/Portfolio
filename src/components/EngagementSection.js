import React from "react";
import styled from "styled-components";
import { MdChecklist, MdSchedule, MdHandshake } from "react-icons/md";

import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { glass, glassHover, iconWell } from "../styles/glass";

const models = [
  {
    icon: MdChecklist,
    title: "Fixed-price project",
    desc: "Best for a well-defined scope. Priced from the Statement of Work and paid per milestone, so there are no surprises on either side.",
    points: [
      "Clear scope and deliverables",
      "Milestone-based payments",
      "Defined acceptance criteria",
    ],
  },
  {
    icon: MdSchedule,
    title: "Time & material",
    desc: "Best for products that evolve as you learn. You pay for the hours or days worked, with transparent reporting and the flexibility to change priorities.",
    points: [
      "Hourly or daily rate",
      "Regular progress reports",
      "Reprioritise at any time",
    ],
  },
  {
    icon: MdHandshake,
    title: "Long-term collaboration",
    desc: "A B2B contract for ongoing work - as your dedicated developer or an extension of your existing team, for a few days a month or full-time.",
    points: [
      "Dedicated developer or team extension",
      "Flexible monthly capacity",
      "Invoiced as a B2B service",
    ],
  },
];

const EngagementStyles = styled.div`
  padding: 10rem 0;
  .engagement__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    margin-top: 5rem;
  }
  .model {
    ${glass}
    ${glassHover}
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2.8rem 2.4rem;
    border-radius: var(--radius-lg);
    &::after {
      background: radial-gradient(
        280px circle at var(--mx, 50%) var(--my, 50%),
        rgba(240, 180, 106, 0.14),
        transparent 62%
      );
    }
    &:hover {
      border-color: rgba(240, 180, 106, 0.45);
    }
  }
  .model__icon {
    ${iconWell}
    width: 4.8rem;
    height: 4.8rem;
    background: linear-gradient(
      135deg,
      rgba(240, 180, 106, 0.28),
      rgba(240, 180, 106, 0.1)
    );
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32),
      0 8px 20px -10px rgba(240, 180, 106, 0.6);
    transition: transform var(--hover-duration) var(--ease-smooth);
    svg {
      width: 2.5rem;
      height: 2.5rem;
      color: var(--accent-2);
    }
  }
  .model:hover .model__icon {
    transform: translateY(-2px) scale(1.06) rotate(-3deg);
  }
  .model__title {
    margin-top: 1.8rem;
    font-size: 2.1rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
  }
  .model__desc {
    margin-top: 1.2rem;
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--ink-1);
    flex: 1;
  }
  .model__points {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    li {
      position: relative;
      padding-left: 1.6rem;
      font-size: 1.4rem;
      color: var(--gray-1);
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.9rem;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background: var(--accent-2);
        box-shadow: 0 0 10px rgba(240, 180, 106, 0.6);
      }
    }
  }
  @media only screen and (max-width: 900px) {
    .engagement__grid {
      grid-template-columns: 1fr;
      max-width: 480px;
      margin: 5rem auto 0;
    }
  }
`;

export default function EngagementSection() {
  return (
    <EngagementStyles>
      <div className="container">
        <SectionTitle
          heading="Ways to work with me"
          subheading="Engagement models"
        />
        <div className="engagement__grid">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <Reveal key={model.title} delay={index * 100}>
                <div className="model glass">
                  <div className="model__icon">
                    <Icon />
                  </div>
                  <h3 className="model__title">{model.title}</h3>
                  <p className="model__desc">{model.desc}</p>
                  <ul className="model__points">
                    {model.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </EngagementStyles>
  );
}
