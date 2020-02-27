import React, { Component } from "react";

class ProjectCard extends Component {

  render() {
    let project, techList, techComp, projectStatus;

    // check for null, means something went wrong with retrieving the data
    // (most likely the record on Airtable is incomplete)
    try {
      project = this.props.project;
      projectStatus = project.status.toLowerCase();
      techList = project.tech.split(","); //convert from csv to array with a list of technologies used for the projects
      techComp = techList.map((tech) =>
        <li id={tech} key={tech}>{tech}</li>
      );
    } catch(error) { // render a simple error instead
      return(
        <div className="project-card">
          <h3>Error occurred while retrieving project data.</h3>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {error.toString()}
          </details>
        </div>
      )
    }

    return (
      <div className="project-card">
        <div className="project-title-repo">
          <a target="_blank" rel="noopener noreferrer" href={project.demo}><h3>{project.name}</h3></a>
          <a target="_blank" rel="noopener noreferrer" href={project.repo}>GitHub</a>
        </div>
        <img src={project.image} alt={"Image for " + project.name} />
        <ul className="project-tech-list">{techComp}</ul>
        <p className="project-blurb">{project.blurb}</p>
        <p className={projectStatus + " project-status"}>{projectStatus}</p>
      </div>
    )
  }
}

export default ProjectCard;
