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
    width: 4.4rem;
    height: 4.4rem;
    z-index: 10;
    background: rgba(12, 18, 28, 0.7);
    border: 1px solid var(--surface-border);
    border-radius: 999px;
    backdrop-filter: blur(8px);
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
    background: rgba(99, 209, 191, 0.2);
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
            {projects.map((project, index) => {
              if (index >= 5) return null;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    img={project.img}
                    title={project.name}
                    desc={project.desc}
                    url={project.url}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
