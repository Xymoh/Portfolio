import React from "react";
import styled from "styled-components";

import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Szymon Ruszkiewicz</h1>
          <PText>
            A Software Engineer with Game Programming and Mobile Programming
            Speciality degree. I'm mainly working using tools like React,
            React-Native, Unity, Android and iOS. My other area of interests are
            ML with python and Rails for my websites backend.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+48691636192",
                path: "tel:+48691636192",
              },
              {
                title: "ruszkiewiczszymon@gmail.com",
                path: "mailto:ruszkiewiczszymon@gmail.com",
              },
              {
                title: "Katowice, Slask, Poland",
                path: "https://www.google.com/maps/place/Katowice/@50.2135882,18.8671101,11z/data=!3m1!4b1!4m5!3m4!1s0x4716ce2336a1ccd1:0xb9af2a350559fabb!8m2!3d50.2648919!4d19.0237815",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Instagram",
                path: "https://www.instagram.com/szy.rus/",
              },
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/szymon-ruszkiewicz-548526180/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2024 - Szymon Ruszkiewicz</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
