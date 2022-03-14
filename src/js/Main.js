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
                                <li>
                                    <a target="_blank" href=
                                    "https://docs.google.com/document/d/11G1d9bD6sqwyv7LiQaNWtwmc01wNm1bpDjVTZphGSPg/edit?usp=sharing"
                                    >RESUME</a>
                                </li>
                                <li><NavLink to="/projects">PROJECTS</NavLink></li>
                                <li><NavLink to="/about">ABOUT</NavLink></li>
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