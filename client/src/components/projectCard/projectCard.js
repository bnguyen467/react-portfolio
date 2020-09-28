import React from "react";
import "../Style/main.css";

function ProjectCard(props) {
  return (
    <div class="item">
      <a href={props.project.image} target="_blank" rel="noopener noreferrer">
        <img src={props.project.image} alt={props.project.title} />
      </a>

      <p class="project-name">
        <i class="far fa-edit"></i>
        {props.project.title}
      </p>

      <a
        href={props.project.website}
        class="button-light"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="far fa-paper-plane"></i> Website
      </a>

      <a
        href={props.project.github}
        target="_blank"
        rel="noopener noreferrer"
        class="button-dark"
      >
        <i class="fab fa-github"></i> Github
      </a>
    </div>
  );
}

export default ProjectCard;
