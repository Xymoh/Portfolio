import React from "react";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";
import PText from "../components/PText";
import Button from "../components/Button";
import ServicesDetail from "../components/ServicesDetail";
import ProcessSection from "../components/ProcessSection";
import EngagementSection from "../components/EngagementSection";
import ContactBanner from "../components/ContactBanner";

const ServicesPageStyles = styled.div`
  padding: 16rem 0 0;
  .services__intro {
    margin-top: 2.4rem;
    text-align: center;
    .para {
      max-width: 720px;
    }
  }
  .services__actions {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0 0;
    .services__actions {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
  }
`;

export default function Services() {
  return (
    <ServicesPageStyles>
      <div className="container">
        <SectionTitle
          heading="Services"
          subheading="Independent software development"
        />
        <div className="services__intro">
          <PText>
            I work with startups, agencies and established companies as an
            independent contractor. I can build any type of application - my
            deepest expertise is in mobile and web - and I also offer generative
            AI work with ComfyUI and custom LoRAs. Every project starts with a
            free estimate and a Statement of Work.
          </PText>
        </div>
        <div className="services__actions">
          <Button btnLink="/contact" btnText="Get a free estimate" />
          <Button btnLink="/projects" btnText="See my work" outline />
        </div>
        <ServicesDetail />
      </div>
      <ProcessSection />
      <EngagementSection />
      <ContactBanner />
    </ServicesPageStyles>
  );
}
