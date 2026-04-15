import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import projectImg from "../assets/images/placeholder.jpg"

const ProjectItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
    background: var(--surface);
    border: 1px solid var(--surface-border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    transition: 0.25s ease transform, 0.25s ease box-shadow, 0.25s ease border-color;
    &:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 209, 191, 0.5);
      box-shadow: 0 20px 44px rgba(0, 0, 0, 0.45);
    }
    .projectItem__img {
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 0;
        display: inline-block;
        background: rgba(255, 255, 255, 0.02);

        img {
          height: 100%;
           object-fit: contain;
           transition: 0.35s ease transform;
        }
    }
    .projectItem__img:hover img {
      transform: scale(1.02);
    }
    .projectItem__info {
      margin-top: 0;
      background-color: transparent;
      padding: 1.8rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .projectItem__title {
      font-size: 2.3rem;
      color: var(--white);
      min-height: 5.6rem;
    }
    .projectItem__desc {
      font-size: 1.5rem;
      font-family: 'RobotoMono Regular';
      margin-top: 1rem;
      line-height: 1.5;
      color: var(--ink-1);
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-height: 11.3rem;
    }
    .projectItem__link {
      color: inherit;
    }
`;

export default function ProjectItem({
  img = projectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  url = "/projects"
}) {
  const projectUrl = url || "/projects";
  const isExternal = /^https?:\/\//i.test(projectUrl);

  const LinkWrapper = ({ children, className }) => {
    if (isExternal) {
      return (
        <a
          href={projectUrl}
          className={className}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={projectUrl} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <ProjectItemStyle>
      <LinkWrapper className="projectItem__img projectItem__link">
        <img src={img} alt="project img" />
      </LinkWrapper>
      <div className="projectItem__info">
        <LinkWrapper className="projectItem__link">
          <h3 className="projectItem__title">{title}</h3>
        </LinkWrapper>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
