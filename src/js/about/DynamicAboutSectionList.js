import React, { Component } from "react";
import ReactLoading from 'react-loading';

import AboutSection from "./AboutSection";

var Airtable = require("airtable");

class DynamicAboutSectionList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aboutData: []
        }
    }

    componentDidMount() {
        // pulls the Airtable API key from .env file
        const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_KEY;

        // projects base in Airtable
        let base = new Airtable({apiKey: AIRTABLE_API_KEY}).base('app4gbPAe1Ntbao76');

        let thisComponent = this; // we lose access to the component via "this", so capture it here so we can use it inside the callback

        base("About").select({
        view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
        // we'll add all of the project data to this array, and then set it as the state
        let data = [];

        records.forEach(function(record) {
            // the "fields" object is what contains all the project data. We don't care about the rest of the response since it's mostly meta
            data.push(record.fields);
        });

        // set the data in the state
        thisComponent.setState({ aboutData: data });
        }, function done(err) {
        if (err) { console.error(err); return; }
        });
    }

    render() {
        const aboutData = this.state.aboutData;
        let aboutComponent;

        if (aboutData.length === 0) {
            aboutComponent = <ReactLoading type={"bars"} className="loading" />;

            return(
            <div className="about-list">
                {aboutComponent}
            </div>
            )
        }

        // create a ProjectCard for each project
        aboutComponent = aboutData.map((a) =>
            <AboutSection about={a} key={a.title}/>
        );

        return(
            <div className="about-list">
                {aboutComponent}
            </div>
        )
    }
}

export default DynamicAboutSectionList;