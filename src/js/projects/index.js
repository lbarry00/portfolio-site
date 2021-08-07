import React, { Component } from "react";

import AirtableProjectsList from "./AirtableProjectsList";

class ProjectsPage extends Component {
    render() {
        return(
            <div>
                <h2>Projects</h2>
                <AirtableProjectsList />
            </div>
        )
    }
}

export default ProjectsPage;