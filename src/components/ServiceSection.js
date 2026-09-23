import styled from "styled-components";

import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import Button from "./Button";
import PText from "./PText";
import Reveal from "./Reveal";
import services from "../assets/data/services";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__intro {
    margin-top: 2.4rem;
    text-align: center;
  }
  .services__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2.4rem;
    margin-top: 5rem;
  }
  .services__cta {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin: 5rem auto 0;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I can build for you" />
        <div className="services__intro">
          <PText>
            I take on any type of application, with my deepest expertise in
            mobile and web. Every project starts with a free estimate and a
            clear Statement of Work.
          </PText>
        </div>
        <div className="services__allItems">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 90}>
                <ServicesSectionItem
                  icon={<Icon />}
                  title={service.title}
                  tag={service.tag}
                  desc={service.short}
                  highlight={service.highlight}
                  link={`/services#${service.id}`}
                />
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="services__cta">
            <Button btnLink="/services" btnText="See all services" outline />
          </div>
        </Reveal>
      </div>
    </ServicesItemStyles>
  );
}
