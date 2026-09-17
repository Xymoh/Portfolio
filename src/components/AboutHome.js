import React from "react";
import styled from "styled-components";

import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImage from "../assets/images/about-me-img-2.jpg";
import Reveal from "./Reveal";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__photo {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow), 0 0 0 1px rgba(255, 255, 255, 0.04);
    transition: transform 1.1s var(--ease-smooth), box-shadow 1.1s var(--ease-smooth);
    img {
      display: block;
      transition: transform 1.6s var(--ease-smooth);
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35),
        inset 0 0 0 1px rgba(255, 255, 255, 0.06);
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.08) 0%,
        rgba(255, 255, 255, 0) 30%
      );
    }
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--glass-shadow-hover);
    }
    &:hover img {
      transform: scale(1.035);
    }
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
        margin-top: 3rem;
    }
    .section-title {
        text-align: center;
    }
    .para {
        margin: 0 auto;
        margin-top: 2rem;
    }
    .aboutSection__buttons {
        flex-direction: column;
        gap: 0;
        .button-wrapper,
        a {
            width: 100%;
            text-align: center;
        }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <Reveal>
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            I am Szymon, a software developer from Katowice, Poland, working
            with startups and companies as an independent contractor. Over the
            last 4+ years I have shipped cross-platform mobile apps for
            startups and publishers and worked on a large-scale React Native
            banking application. I handle the whole journey: estimate,
            Statement of Work, architecture, development, release and support.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/services" btnText="Services"></Button>
            <Button btnLink="/about" btnText="Read More" outline></Button>
          </div>
          </Reveal>
        </div>
        <div className="aboutSection__right">
          <Reveal delay={150}>
            <div className="aboutSection__photo">
              <img src={AboutImage} alt="about me" />
            </div>
          </Reveal>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
