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
import Reveal from "./Reveal";
import { glass, glassHover, iconWell } from "../styles/glass";

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
  }
  .step {
    ${glass}
    ${glassHover}
    height: 100%;
    padding: 2.4rem 2rem;
    border-radius: var(--radius-lg);
  }
  .step__num {
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
    font-family: "RobotoMono Regular";
    font-size: 1.3rem;
    letter-spacing: 0.1em;
    color: var(--ink-2);
  }
  .step__icon {
    ${iconWell}
    width: 4.6rem;
    height: 4.6rem;
    transition: transform var(--hover-duration) var(--ease-smooth);
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  .step:hover .step__icon {
    transform: translateY(-2px) scale(1.06) rotate(-3deg);
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
        <Reveal>
          <div className="process__intro">
            <PText>
              The estimate is always free and the Statement of Work is part of
              every project - you know the scope, timeline and cost before any
              work starts.
            </PText>
          </div>
        </Reveal>
        <div className="process__steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 80}>
                <div className="step glass">
                  <span className="step__num">0{index + 1}</span>
                  <div className="step__icon">
                    <Icon />
                  </div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__desc">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </ProcessStyles>
  );
}
