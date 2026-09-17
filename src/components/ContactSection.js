import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";

import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import PText from "./PText";
import Reveal from "./Reveal";
import { glass } from "../styles/glass";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .contactSection__hint {
    ${glass}
    padding: 2.4rem;
    border-color: rgba(99, 209, 191, 0.35);
    border-radius: var(--radius-lg);
    h3 {
      font-size: 1.9rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
      margin-bottom: 1.2rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    li {
      position: relative;
      padding-left: 1.6rem;
      font-size: 1.45rem;
      line-height: 1.55;
      color: var(--ink-1);
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.85rem;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background: var(--accent);
      }
    }
    .para {
      margin: 1.4rem 0 0;
      font-size: 1.45rem;
    }
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle
          heading="Contact"
          subheading="Free estimate - no strings attached"
        />
        <div className="contactSection__wrapper">
          <div className="left">
            <Reveal>
              <ContactInfoItem icon={<MdLocalPhone />} text="+48 691-636-192" />
            </Reveal>
            <Reveal delay={80}>
              <ContactInfoItem icon={<MdEmail />} text="szyruszk@gmail.com" />
            </Reveal>
            <Reveal delay={160}>
              <ContactInfoItem text="Katowice, Poland" />
            </Reveal>
            <Reveal delay={240}>
            <div className="contactSection__hint glass">
              <h3>Want an estimate? Tell me about:</h3>
              <ul>
                <li>What you want to build and who it is for</li>
                <li>Target platforms (iOS, Android, web, other)</li>
                <li>Rough timeline and budget range, if you have one</li>
                <li>Any existing designs, code or documentation</li>
              </ul>
              <PText>
                I will reply with follow-up questions or a first estimate, and
                prepare a Statement of Work once we agree on the scope.
              </PText>
            </div>
            </Reveal>
          </div>
          <div className="right">
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
