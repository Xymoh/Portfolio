import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

import SectionTitle from "../components/SectionTitle";
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../assets/data/projects";

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 3rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 360px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 1.7rem;
    padding: 1.15rem 4rem 1.15rem 1.4rem;
    color: var(--white);
    background: rgba(12, 18, 28, 0.74);
    border-radius: 999px;
    outline: none;
    border: 1px solid var(--surface-border);
    transition: 0.2s ease border;
    &:focus {
      border: 1px solid rgba(99, 209, 191, 0.75);
    }
  }
  .projects__searchBar input::placeholder {
    color: var(--ink-2);
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2.3rem;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .projects__searchBar .searchIcon path {
    color: var(--ink-2);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some of my recent works" />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
