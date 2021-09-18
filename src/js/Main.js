import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import HomePage from "./home/index";
import AboutPage from "./about/index";
import ProjectsPage from "./projects/index";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div id="titlebar">
                        <h1><a href="/">LAUREN BARRY</a></h1>
                        <nav>
                            <ul>
                                <li><NavLink exact to="/">HOME</NavLink></li>
                                <li><NavLink to="/about">ABOUT</NavLink></li>
                                <li><NavLink to="/projects">PROJECTS</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="page-content">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/projects" component={ProjectsPage} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;