import React, { Component } from "react";
import ReactLoading from 'react-loading';

import ProjectCard from "./ProjectCard";

var Airtable = require("airtable");

class AirtableProjectsList extends Component {
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
    let projComponent;

    // Implement loading animation if projects list hasn't been loaded from Airtable yet
    if (projectsList.length === 0) {
      projComponent = <ReactLoading type={"bars"} className="loading" />;

      return(
        <div id="projects-loading">
          {projComponent}
        </div>
      )
    } else {
      // create a ProjectCard for each project
      projComponent = projectsList.map((project) =>
          <ProjectCard project={project} key={project.name}/>
        );

      return(
        <div id="projects-page">
          <div class="sticky-title">
                <h2>Projects</h2>
            </div>
          <div className="projects-list">
            {projComponent}
          </div>
        </div>
        
      );
    }
  }
}

export default AirtableProjectsList;
