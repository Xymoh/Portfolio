import React from "react";
import styled from "styled-components";
import { MdDesktopMac, MdPhoneAndroid, MdCode } from "react-icons/md";

import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Game Dev"
            desc="I make mobile and pc games using Unity Engine and/or Unreal Engine. Every genre is possible, I just love making games."
          />
          <ServicesSectionItem 
          icon={<MdPhoneAndroid />} 
          title="Mobile Apps"
          desc="I make mobile apps mainly on Android using Kotlin and AS, but if it is a simple mobile application I can make Crossplatform one for you using Xamarin."
          />
          <ServicesSectionItem
          icon={<MdCode />}
          title="Web Dev"
          desc="I do UI/UX design and can also program a unique front look. I'm still learning REST API Django, so I can provide you with more advanced websites." />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
