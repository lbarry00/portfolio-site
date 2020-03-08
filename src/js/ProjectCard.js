import React, { Component } from "react";

class ProjectCard extends Component {

  render() {
    let project, techList, techComp, projectStatus, imageComp, demoComp;

    // check for null, means something went wrong with retrieving the data
    // (most likely the record on Airtable is incomplete)
    try {
      project = this.props.project;
      projectStatus = project.status.toLowerCase();
      techList = project.tech.split(","); //convert from csv to array with a list of technologies used for the projects
      techComp = techList.map((tech) =>
        <li id={tech} key={tech}>{tech}</li>
      );

      // if there's an image, set the image component
      if (project.image) {
        imageComp = <img src={project.image} alt={"Image for " + project.name} />
      } else {
        imageComp = null;
      }

      // if there's a demo available, set the demo link
      if (project.demo) {
        demoComp = <a target="_blank" rel="noopener noreferrer" href={project.demo}>Demo</a>
      } else {
        demoComp = null;
      }
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
      <div className="project-card panel">
        <div className="project-title-repo">
          <h3>{project.name}</h3>
          {demoComp}
          <a target="_blank" rel="noopener noreferrer" href={project.repo}>GitHub</a>
        </div>
        {imageComp}
        <ul className="project-tech-list">{techComp}</ul>
        <p className="project-blurb">{project.blurb}</p>
        <p className={projectStatus + " project-status"}>{projectStatus.charAt(0).toUpperCase() + projectStatus.slice(1)}</p>
      </div>
    )
  }
}

export default ProjectCard;
