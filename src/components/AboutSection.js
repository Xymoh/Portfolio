import React from "react";
import styled from "styled-components";

import PText from "../components/PText";
import AboutImg from "../assets/images/szymonRuszkiewicz.png";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { glassLite } from "../styles/glass";

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
  }
  .about__photo {
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
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      ${glassLite}
      display: inline-block;
      padding: 0.4rem 1.2rem;
      border-radius: 999px;
      color: var(--white);
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
  .about__actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    .button-wrapper {
      margin-top: 2rem;
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
            <Reveal>
            <p className="about__subheading">
              Hi, I am <span>Szymon Ruszkiewicz</span>
            </p>
            <h2 className="about__heading">
              Software Developer &amp; Independent Contractor
            </h2>
            <div className="about__info">
              <PText>
                I am a software developer based in Katowice, Poland, with 4+
                years of commercial experience building mobile and web
                applications. I have worked with startups shipping their first
                products, a publisher releasing a series of educational apps,
                and a bank maintaining a large-scale React Native application -
                so I am comfortable both moving fast and working in regulated,
                process-heavy environments.
                <br />
                <br />
                I work as an independent contractor (B2B) with companies of any
                size. I can take on any type of application - mobile and web
                are where I am strongest, but I have also built games in Unity,
                Discord bots, ML prototypes and internal tools. Every engagement
                starts with a free estimate and a Statement of Work, so you know
                the scope, timeline and cost before we start.
                <br />
                <br />
                Alongside client work I explore generative AI: building ComfyUI
                workflows, training custom LoRAs and preparing image-generation
                examples that can be plugged into real products. I studied
                Computer Science at the University of Economics in Katowice, and
                I am a gamer at heart - which still shapes how I think about
                user experience.
              </PText>
            </div>
            <div className="about__actions">
              <Button
                href="https://drive.google.com/file/d/1qy7fJJdiPFhvAF5TR8uLvbff9EjmiU2c/view?usp=drive_link"
                btnText="Download CV"
              />
              <Button btnLink="/services" btnText="See services" outline />
            </div>
            </Reveal>
          </div>
          <div className="right">
            <Reveal delay={150}>
              <div className="about__photo">
                <img src={AboutImg} alt="Szymon Ruszkiewicz img" />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="about__info__items">
          <Reveal>
          <div className="about__info__item">
            <h1 className="about__info__heading">Work with me</h1>
            <AboutInfoItem
              title="What I offer"
              variant="list"
              items={[
                "Any type of application - strongest in mobile (React Native) and web (React)",
                "Free price and timeline estimate for every project",
                "Statement of Work (scope, milestones, timeline, pricing) prepared before we start",
                "Generative AI: ComfyUI workflows, custom LoRA training, image pipelines",
                "Fixed-price, time & material or long-term B2B collaboration",
              ]}
            />
          </div>
          </Reveal>
          <Reveal>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="June 2025 - Present"
              variant="list"
              items={[
                "Mobile Software Developer at Efigence in Warsaw, Poland",
                "Maintaining the Riyad Bank React Native banking frontend",
                "Working with backend, UI/UX, QA, and international stakeholders in Agile",
                "Stack: React Native, TypeScript, Redux, React Navigation, APIMockup, Git",
              ]}
            />
            <AboutInfoItem
              title="June 2022 - June 2025"
              variant="list"
              items={[
                "Software Engineer at TDCM.io in Lodz, Poland",
                "Built and deployed cross-platform mobile apps for startups",
                "Handled architecture decisions, estimations, and client communication",
                "Stack: React Native, TypeScript, React, GraphQL, Firebase, REST API, Ruby on Rails",
              ]}
            />
          </div>
          </Reveal>
          <Reveal>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={[
                "React",
                "Angular",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS",
                "SCSS / SASS",
                "styled-components",
                "BEM",
                "Ionic",
              ]}
            />
            <AboutInfoItem
              title="MobileDev"
              items={[
                "React Native",
                "Expo",
                "Bare CLI",
                "Android",
                "iOS",
                "Xamarin",
                "XAML",
                "Kotlin (basics)",
                "Swift (basics)",
              ]}
            />
            <AboutInfoItem
              title="Game Dev"
              items={[
                "Unity",
                "Vuforia AR",
                "C#",
                "Game Prototyping",
              ]}
            />
            <AboutInfoItem
              title="AI Engineering"
              items={[
                "LLM integration",
                "Prompt engineering",
                "Local LLMs (Ollama)",
                "ONNX model inference",
                "Dataset tagging & curation",
                "Python",
              ]}
            />
            <AboutInfoItem
              title="Generative AI"
              items={[
                "ComfyUI",
                "Custom node workflows",
                "LoRA training",
                "Stable Diffusion",
                "Anima",
                "Image pipelines",
                "Civitai publishing",
              ]}
            />
            <AboutInfoItem
              title="AI-Assisted Dev"
              items={[
                "Claude Code",
                "Claude",
                "GitHub Copilot",
                "Roo Code",
                "AI pair programming",
              ]}
            />
            <AboutInfoItem
              title="Tools"
              items={[
                "Git",
                "Postman",
                "Apollo GraphQL",
                "VS Code",
                "Android Studio",
                "Xcode",
                "Jira",
                "Trello",
                "ClickUp",
                "Figma",
                "Canva",
              ]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={[
                "GraphQL",
                "REST APIs",
                "Node.js",
                "Express.js",
                "Ruby on Rails",
                "PostgreSQL",
                "MySQL",
                "Firebase",
              ]}
            />
            <AboutInfoItem
              title="Soft Skills"
              items={[
                "Project Management",
                "Client Communication",
                "Technical Estimation",
                "Problem-Solving",
                "Working Under Pressure",
                "Cross-Functional Collaboration",
                "Communication",
                "Adaptability",
              ]}
            />
            <AboutInfoItem
              title="Languages"
              items={[
                "Polish - Native",
                "English - C2",
                "Serbian - B1",
                "Japanese - JLPT N5",
              ]}
            />
          </div>
          </Reveal>
          <Reveal>
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="College"
              items={["University of Economics in Katowice"]}
            />
          </div>
          </Reveal>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
