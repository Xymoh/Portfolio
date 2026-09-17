import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import projectImg from "../assets/images/placeholder.jpg";
import { glass, glassHover } from "../styles/glass";

const ProjectItemStyle = styled.div`
  ${glass}
  ${glassHover}
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  .projectItem__img {
    width: 100%;
    height: 300px;
    overflow: hidden;
    display: block;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    img {
      height: 100%;
      object-fit: contain;
      transition: transform 1.4s var(--ease-smooth);
    }
  }
  &:hover .projectItem__img img {
    transform: scale(1.05);
  }
  .projectItem__info {
    margin-top: 0;
    background-color: transparent;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .projectItem__title {
    font-size: 2.3rem;
    color: var(--white);
    min-height: 5.6rem;
    transition: color 0.5s var(--ease-smooth);
  }
  a.projectItem__link:hover .projectItem__title {
    color: var(--accent);
  }
  .projectItem__desc {
    font-size: 1.5rem;
    font-family: "RobotoMono Regular";
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
  url = "",
}) {
  const isExternal = /^https?:\/\//i.test(url);

  // Projects without a public link (e.g. client work) render as plain cards.
  const LinkWrapper = ({ children, className }) => {
    if (!url) {
      return <div className={className}>{children}</div>;
    }

    if (isExternal) {
      return (
        <a
          href={url}
          className={className}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={url} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <ProjectItemStyle className="glass">
      <LinkWrapper className="projectItem__img projectItem__link">
        <img src={img} alt={title} />
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
