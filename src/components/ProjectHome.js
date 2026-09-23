import React from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import styled from "styled-components";

import "swiper/css";
import 'swiper/css/navigation';

import SectionTitle from "./SectionTitle";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";


SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 6rem;
    max-width: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--accent);
    width: 4.6rem;
    height: 4.6rem;
    z-index: 10;
    background: var(--glass-bg-strong);
    -webkit-backdrop-filter: blur(14px) saturate(160%);
    backdrop-filter: blur(14px) saturate(160%);
    border: 1px solid var(--glass-border);
    border-radius: 999px;
    box-shadow: var(--glass-rim), 0 12px 28px -14px rgba(0, 0, 0, 0.7);
    transition: transform 0.7s var(--ease-smooth), background 0.6s var(--ease-smooth),
      color 0.6s var(--ease-smooth), border-color 0.6s var(--ease-smooth);
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.6rem;
    font-weight: 700;
  }
  .swiper-slide {
    height: auto;
    display: flex;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: var(--white);
    border-color: var(--glass-border-hover);
    background: rgba(99, 209, 191, 0.22);
    transform: scale(1.08);
  }
  .swiper-button-next:active,
  .swiper-button-prev:active {
    transform: scale(0.96);
    transition-duration: 0.2s;
  }
`;

export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="A curated selection, swipe to explore"
        />
        <Reveal>
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {projects.slice(0, 5).map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectItem
                  img={project.img}
                  title={project.name}
                  desc={project.desc}
                  url={project.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </Reveal>
      </div>
    </ProjectSectionStyle>
  );
}
