import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

var Airtable = require("airtable");

class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    // pulls the Airtable API key from .env file
    const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_KEY;

    // projects base in Airtable
    let base = new Airtable({apiKey: AIRTABLE_API_KEY}).base('app4gbPAe1Ntbao76');

    let thisComponent = this; // we lose access to the component via "this", so capture it here so we can use it inside the callback

    base("Projects").select({
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // we'll add all of the project data to this array, and then set it as the state
      let projectsArray = [];

      records.forEach(function(record) {
         // the "fields" object is what contains all the project data. We don't care about the rest of the response since it's mostly meta
        projectsArray.push(record.fields);
      });

      // set the data in the state
      thisComponent.setState({ projects: projectsArray });
    }, function done(err) {
      if (err) { console.error(err); return; }
    });
  }

  render() {
    const projectsList = this.state.projects;

    // create a ProjectCard for each project
    const projComponent = projectsList.map((project) =>
        <ProjectCard project={project} key={project.name}/>
      );

    return(
      <div className="projects-list">
        {projComponent}
      </div>
    );
  }
}

export default ProjectsList;
