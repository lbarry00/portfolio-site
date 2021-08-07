import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import ProjectsPage from "./projects/index";
import HomePage from "./home/index";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/projects" component={ProjectsPage} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;