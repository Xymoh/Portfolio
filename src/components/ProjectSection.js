import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper } from "swiper/react";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
  return (
    <div>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects__allItems">
          <Swiper>
            {projects.map((project, index) => {
              if (index >= 5) return;
              return <ProjectItem />;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
