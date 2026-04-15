import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import HeroImg from "../assets/images/heroMainImg.jpg";
import SocialMediaArrow from "../assets/images/down-arrow2.png";
import PText from "./PText";
import Button from "./Button";

const HeroStyles = styled.div`
  .hero {
    min-height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 12rem 0 8rem;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -1.2rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7.2rem;
      font-family: "Montserrat Bold";
      color: var(--white);
      letter-spacing: 0.01em;
    }
  }
  .hero__img {
    max-width: 920px;
    width: 100%;
    height: 560px;
    margin: 0 auto;
    border: 1px solid var(--surface-border);
    border-radius: 26px;
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    background: rgba(255, 255, 255, 0.02);
    img {
      object-fit: cover;
      transition: 0.45s ease transform;
    }
    &:hover img {
      transform: scale(1.03);
    }
  }
  .hero__info {
    margin: 2.8rem auto 0;
    max-width: 680px;
    background: rgba(12, 18, 28, 0.72);
    border: 1px solid var(--surface-border);
    border-radius: 18px;
    padding: 2.4rem;
    box-shadow: var(--shadow-soft);
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 24px;
    width: 50px;
  }
  .hero__social {
    left: 3.8rem;
  }
  .hero__scrollDown {
    right: 3.8rem;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.4rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.5rem;
      text-transform: uppercase;
      color: var(--ink-2);
    }
    img {
      max-height: 90px;
      width: 32px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 140px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 2.1rem;
        margin-bottom: 1.4rem;
        transition: 0.2s ease transform, 0.2s ease color;
        &:hover {
          transform: translateY(-2px);
          color: var(--accent);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 760px;
      padding: 9rem 0 7rem;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -2.2rem;
      .hero__name {
        font-size: 4.6rem;
      }
    }
    .hero__img {
      height: 310px;
    }
    .hero__info {
      margin-top: 2.4rem;
      padding: 1.8rem;
    }
    .hero__social {
      left: 0px;
      bottom: -9%;
      .hero__social__indicator {
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      bottom: -7%;
      gap: 1rem;
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Szymon Rusz.</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="hero img" />
          </div>
          <div className="hero__info">
            <PText>
              I am a Computer Science student focused on crafting polished
              digital products across mobile apps, web interfaces, and gameplay
              systems. I blend practical engineering with thoughtful UI design.
            </PText>
            <Button
              btnLink="/projects"
              btnText="Explore My Projects"
              outline={false}
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/Xymoh"
                    target="_blank"
                    rel="norefferer noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/szy.rus/"
                    target="_blank"
                    rel="norefferer noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/szymon-r-548526180/"
                    target="_blank"
                    rel="norefferer noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={SocialMediaArrow} alt="Scroll down arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
