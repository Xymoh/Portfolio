import React from "react";
import styled from "styled-components";
import {
  MdCall,
  MdRequestQuote,
  MdDescription,
  MdBuild,
  MdRocketLaunch,
} from "react-icons/md";

import SectionTitle from "./SectionTitle";
import PText from "./PText";

const steps = [
  {
    icon: MdCall,
    title: "Discovery call",
    desc: "We talk through your idea, goals, users and constraints. No commitment, no fee.",
  },
  {
    icon: MdRequestQuote,
    title: "Free estimate",
    desc: "You receive a price and timeline estimate, free of charge, with the assumptions written down.",
  },
  {
    icon: MdDescription,
    title: "Statement of Work",
    desc: "I prepare an SOW: scope, deliverables, milestones, timeline, pricing and acceptance criteria - so both sides know exactly what is being built.",
  },
  {
    icon: MdBuild,
    title: "Build & demo",
    desc: "Iterative delivery in sprints with regular demos, so you see progress early and can adjust before it gets expensive.",
  },
  {
    icon: MdRocketLaunch,
    title: "Launch & support",
    desc: "Store or production release, handover, documentation, and optional ongoing maintenance.",
  },
];

const ProcessStyles = styled.div`
  padding: 10rem 0;
  .process__intro {
    margin-top: 2.4rem;
    text-align: center;
  }
  .process__steps {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    margin-top: 5rem;
    counter-reset: step;
  }
  .step {
    position: relative;
    padding: 2.4rem 2rem;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: 16px;
    box-shadow: var(--shadow-soft);
    counter-increment: step;
    transition: 0.25s ease transform, 0.25s ease border-color;
    &:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 209, 191, 0.5);
    }
    &::before {
      content: "0" counter(step);
      position: absolute;
      top: 1.6rem;
      right: 1.8rem;
      font-family: "RobotoMono Regular";
      font-size: 1.3rem;
      letter-spacing: 0.1em;
      color: var(--ink-2);
    }
  }
  .step__icon {
    width: 4.6rem;
    height: 4.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(99, 209, 191, 0.14);
    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: var(--accent);
    }
  }
  .step__title {
    margin-top: 1.8rem;
    font-size: 1.9rem;
    font-family: "Montserrat SemiBold";
    color: var(--white);
  }
  .step__desc {
    margin-top: 1rem;
    font-size: 1.4rem;
    line-height: 1.6;
    color: var(--ink-1);
  }
  @media only screen and (max-width: 1100px) {
    .process__steps {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 768px) {
    .process__steps {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin: 5rem auto 0;
    }
  }
`;

export default function ProcessSection() {
  return (
    <ProcessStyles>
      <div className="container">
        <SectionTitle
          heading="How we work together"
          subheading="From idea to release"
        />
        <div className="process__intro">
          <PText>
            The estimate is always free and the Statement of Work is part of
            every project - you know the scope, timeline and cost before any
            work starts.
          </PText>
        </div>
        <div className="process__steps">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div className="step" key={step.title}>
                <div className="step__icon">
                  <Icon />
                </div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </ProcessStyles>
  );
}
