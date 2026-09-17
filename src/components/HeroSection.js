import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import HeroImg from "../assets/images/heroMainImg.jpg";
import SocialMediaArrow from "../assets/images/down-arrow2.png";
import PText from "./PText";
import Button from "./Button";
import { glass } from "../styles/glass";

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
  @keyframes heroIn {
    from {
      opacity: 0;
      transform: translateY(28px) scale(0.985);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes pulseDot {
    0% {
      box-shadow: 0 0 0 0 rgba(99, 209, 191, 0.55);
    }
    70% {
      box-shadow: 0 0 0 9px rgba(99, 209, 191, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(99, 209, 191, 0);
    }
  }
  @keyframes floatY {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }
  .hero__badge {
    ${glass}
    --glass-bg: var(--glass-bg-strong);
    display: inline-flex;
    align-items: center;
    gap: 0.9rem;
    padding: 0.75rem 1.5rem 0.75rem 1.2rem;
    border-radius: 999px;
    font-size: 1.25rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 2.6rem;
    animation: heroIn 0.8s var(--ease-out) backwards;
    &::after {
      display: none;
    }
  }
  .hero__badge__dot {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: var(--accent);
    animation: pulseDot 2.2s ease-out infinite;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -1.2rem;
    position: relative;
    z-index: 2;
    animation: heroIn 0.8s var(--ease-out) 0.08s backwards;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7.2rem;
      font-family: "Montserrat Bold";
      color: var(--white);
      letter-spacing: -0.02em;
      background: linear-gradient(180deg, #ffffff 0%, #c9d6e8 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .hero__img {
    position: relative;
    max-width: 920px;
    width: 100%;
    height: 560px;
    margin: 0 auto;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--glass-shadow), 0 0 0 1px rgba(255, 255, 255, 0.04);
    background: rgba(255, 255, 255, 0.02);
    animation: heroIn 0.9s var(--ease-out) 0.18s backwards;
    transition: transform 1.1s var(--ease-smooth), box-shadow 1.1s var(--ease-smooth);
    img {
      object-fit: cover;
      transition: transform 1.6s var(--ease-smooth);
    }
    /* glass rim drawn over the photo */
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
  .hero__info {
    ${glass}
    --glass-bg: var(--glass-bg-strong);
    margin: 2.8rem auto 0;
    max-width: 720px;
    border-radius: var(--radius-lg);
    padding: 2.6rem 2.4rem;
    animation: heroIn 0.9s var(--ease-out) 0.3s backwards;
  }
  .hero__actions {
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    flex-wrap: wrap;
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
      animation: floatY 2.4s ease-in-out infinite;
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
        transition: transform 0.7s var(--ease-smooth), color 0.5s var(--ease-smooth);
        &:hover {
          transform: translateY(-3px) scale(1.12);
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
    .hero__badge {
      font-size: 1.1rem;
      margin-bottom: 2rem;
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
    .hero__actions {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
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
          <div className="hero__badge">
            <span className="hero__badge__dot" aria-hidden="true" />
            Open to new projects
          </div>
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Szymon Rusz.</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="hero img" />
          </div>
          <div className="hero__info glass">
            <PText>
              Independent software developer with 4+ years of commercial
              experience, building mobile and web apps for startups and
              enterprises - from first MVPs to banking products. I take on any
              type of application, with my deepest expertise in React Native
              and React, and I also build generative AI workflows with ComfyUI
              and custom LoRAs. Free estimate and a clear Statement of Work on
              every project.
            </PText>
            <div className="hero__actions">
              <Button btnLink="/contact" btnText="Get a free estimate" />
              <Button btnLink="/services" btnText="View services" outline />
            </div>
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
