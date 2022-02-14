import React from "react";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImage from "../assets/images/about-me-img-2.jpg";
import styled from "styled-components";

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
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            I am a Computer Science student from University of Economics in
            Katowice, Poland. I create video games and mobile applications. I
            love entertainment and I always try to show my unique views to the
            audience through my own game/app design.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works"></Button>
            <Button btnLink="/about" btnText="Read More" outline></Button>
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImage} alt="about me" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
