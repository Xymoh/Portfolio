import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectItemStyle = styled.div`
    .projectItem__img {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
    }
`;

export default function ProjectItem() {
  return (
    <ProjectItemStyle>
      <Link to="#" className="projectItem__img">
        <img src="" alt="" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">Project 1</h3>
        </Link>
        <p className="projectItem__desc">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum, Lorem
          ipsum.
        </p>
      </div>
    </ProjectItemStyle>
  );
}
