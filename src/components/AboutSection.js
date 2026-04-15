import React from "react";
import styled from "styled-components";

import PText from "../components/PText";
import AboutImg from "../assets/images/szymonRuszkiewicz.png";
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
                I am from Katowice, Poland. Since my childhood, I love
                videogames, entertainment and computers, literally all about em
                is fun. I always try to design a unique applications or games
                which could bring a new level of user experience and something
                that could be useful for them.
                <br />
                <br />
                I started coding relatively late. It all started with the
                question "What do I want to study?". So I asked myself, What
                would be the most fun thing for me to do for the rest of my
                life, and what did I enjoyed the most. Answer was simple,
                computers, their architecture and videogames. So I found myself
                a university with speciality for videogames and mobile
                applications development. Starting coding and making software
                was the best decision in my life.
                <br />
                <br />
                My vision is to make an application or a video game which gonna
                be known and remembered by the people. Something that gonna
                bring a refreshing and memorable memories, or make the life
                easier, more fun.
              </PText>
            </div>
            <a
              href="https://drive.google.com/file/d/1qy7fJJdiPFhvAF5TR8uLvbff9EjmiU2c/view?usp=drive_link"
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
              title="FrontEnd"
              items={[
                "React",
                "HTML",
                "HTML5",
                "CSS",
                "SCSS",
                "SASS",
                "BEM",
                "JavaScript",
                "TypeScript",
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
              title="AI Tools"
              items={[
                "GitHub Copilot",
                "Claude",
                "Roo",
                "Stable Diffusion",
                "ComfyUI",
                "Ollama",
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
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
