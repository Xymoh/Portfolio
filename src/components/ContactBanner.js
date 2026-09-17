import React from "react";
import styled from "styled-components";

import Button from "./Button";
import PText from "./PText";
import Reveal from "./Reveal";
import { glass } from "../styles/glass";

const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wrapper {
        ${glass}
        border-radius: var(--radius-lg);
        padding: 6rem 2rem;
        text-align: center;
        overflow: hidden;
    }
    /* soft accent glow behind the text */
    .contactBanner__glow {
        position: absolute;
        z-index: -1;
        pointer-events: none;
        left: 50%;
        top: 50%;
        width: 70%;
        height: 160%;
        transform: translate(-50%, -50%);
        background: radial-gradient(
            closest-side,
            rgba(99, 209, 191, 0.22),
            rgba(61, 127, 203, 0.1) 55%,
            transparent 100%
        );
        filter: blur(20px);
    }
    .contactBanner__heading {
        color: var(--white);
    }
    .contactBanner__heading {
        font-size: 4rem;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .contactBanner__heading {
            font-size: 2.8rem;
        }
    }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <Reveal>
        <div className="contactBanner__wrapper glass">
          <span className="contactBanner__glow" aria-hidden="true" />
          <PText>
            Have a project in mind? The estimate is free and every project
            comes with a clear Statement of Work.
          </PText>
          <h3 className="contactBanner__heading">Let us talk about your project</h3>
          <Button btnText="Get a free estimate" btnLink="/contact" />
        </div>
        </Reveal>
      </div>
    </ContactBannerStyles>
  );
}
