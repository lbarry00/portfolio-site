import React, { Component } from "react";

import DynamicAboutSectionList from "./DynamicAboutSectionList";

class AboutPage extends Component {
    render() {
        return(
            <div id="about-page">
                <h2 id="about-me">ABOUT ME</h2>
                <p class="about-blurb">Hello, my name is Lauren.
                I graduated from <a href="https://www.whitworth.edu/cms/">Whitworth University</a> in May 2020, and
                I'm currently an associate tools engineer at <a href="https://www.bungie.net/">Bungie</a>.
                I'm also interested in web development, cloud computing, and more.
                In my free time, I love listening to and playing music (piano), watching Seahawks football, and playing video games. 
                </p>
                <h3>MY SKILLS</h3>
                <div id="skills-list">
                    <div id="languages" className="skills-subsection">
                        <h4>Languages</h4>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                        </ul>
                    </div>
                    <div id="frameworks" className="skills-subsection">
                        <h4>Frameworks & Libraries</h4>
                        <ul>
                            <li>ReactJS</li>
                            <li>jQuery</li>
                            <li>WPF</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div id="tools" className="skills-subsection">
                        <h4>Tools & Platforms</h4>
                        <ul>
                            <li>Git</li>
                            <li>AWS</li>
                            <li>MongoDB</li>
                            <li>SQL</li>
                            <li>Maven</li>
                            <li>Windows</li>
                            <li>Linux</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;