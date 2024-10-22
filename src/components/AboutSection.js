import React from "react";
import styled from "styled-components";

import PText from "../components/PText";
import AboutImg from "../assets/images/szymonRuszkiewiczGray.png";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__downloadCV {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    margin-top: 2rem;
    font-size: 2.2rem;
    background-color: ${(props) => (props.outline ? "transparent" : "grey")};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid grey;
    color: ${(props) => (props.outline ? "grey" : "black")};
    text-decoration: none;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: var(--gray-2);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-top: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__info__downloadCV {
      font-size: 1.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Szymon Ruszkiewicz</span>
            </p>
            <h2 className="about__heading">A Computer Science Student</h2>
            <div className="about__info">
              <PText>
                I am from Katowice, Poland. Since childhood, I've been
                passionate about video games, entertainment, and
                computers—everything about them fascinates me. I strive to
                design unique applications and games that elevate user
                experience and provide genuine utility.
                <br />
                <br />
                My coding journey began later than most. It all started with a
                pivotal question: "What do I want to study?" I pondered what
                would bring me the most joy and fulfillment in life. The answer
                was clear: computers, their architecture, and video games. This
                realization led me to a university specializing in video game
                and mobile application development. Diving into coding and
                software creation was the best decision I've ever made.
                <br />
                <br />
                My vision is to create an application or video game that will be
                remembered and cherished by people. I aim to craft experiences
                that evoke refreshing and memorable moments or make life easier
                and more enjoyable.
              </PText>
            </div>
            <a
              href="https://drive.google.com/file/d/1d4Z-_Nck8VLiLqf6S9y_R7ImKRHUtAEa/view?usp=sharing"
              className="about__info__downloadCV"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Szymon Ruszkiewicz img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="College"
              items={["University of Economics in Katowice"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="Mobile Dev"
              items={[
                "React-Native",
                "Flutter",
                "Android Studio",
                "Kotlin",
                "xCode",
                "Swift",
              ]}
            />
            <AboutInfoItem
              title="Game Dev"
              items={["Unity", "C#", "Vuforia", "Unreal"]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={[
                "Rails",
                "Quarkus",
                "Django",
                "Firebase",
                "Node.js",
                "PSQL",
                "MySQL",
              ]}
            />
            <AboutInfoItem
              title="FrontEnd"
              items={[
                "Javascript",
                "Typescript",
                "SCSS",
                "React",
                "Canva",
                "Photoshop",
                "Figma",
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="June 2022 - Till now"
              items={["Software Developer at TDCM.io"]}
            />
            <AboutInfoItem
              title="March 2021 - August 2021"
              items={["React + Django REST API Internship at VascoSky"]}
            />
            <AboutInfoItem
              title="March 2020 - March 2022"
              items={["FQA Tester at Keywords Studio"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
