import React, { Component } from "react";
import {
    HashRouter,
    NavLink,
    Route
} from "react-router-dom";

import AboutPage from "./about/index";
import HomePage from "./home/index";
import ProjectsPage from "./projects/index";

class Main extends Component {

    // close the hamburger menu when a nav menu item is selected
    onLinkClick() {
        document.getElementById("hamburger-toggle").checked = false;
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <div id="titlebar">
                        <h1><a href="/">LEO BARRY</a></h1>
                        <nav>
                            <input type="checkbox" id="hamburger-toggle"/>
                            <label htmlFor="hamburger-toggle"></label>
                            <ul id="nav-items-list">
                                <li className="nav-item"><NavLink exact to="/" onClick={() => this.onLinkClick()}>HOME</NavLink></li>
                                <li className="nav-item">
                                    <a 
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/11G1d9bD6sqwyv7LiQaNWtwmc01wNm1bpDjVTZphGSPg/edit?usp=sharing"
                                        onClick={() => this.onLinkClick()}>
                                            RESUME
                                    </a>
                                </li>
                                {/*
                                TODO: commenting out projects in navbar until I can refactor the airtable API access
                                <li className="nav-item"><NavLink to="/projects" onClick={() => this.onLinkClick()}>PROJECTS</NavLink></li>
                                */}
                                <li className="nav-item"><NavLink to="/about" onClick={() => this.onLinkClick()}>ABOUT</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="page-content">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/projects" component={ProjectsPage} />
                        <Route path="/about" component={AboutPage} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;