import React, { Component } from "react";

import DynamicAboutSectionList from "./DynamicAboutSectionList";

class AboutPage extends Component {

    /* TODO Add skills list to about page
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
    */

    render() {
        const pianoStartYear = 2003;
        let thisYear = new Date().getFullYear();
        let yearsSinceStartingPiano = Math.abs(thisYear - pianoStartYear);

        return(
            <div id="about-page">
                <h2 id="about-me">ABOUT ME</h2>
                <div id="about-sections-container">
                    <img className="panel" src="/img/me2.jpg" alt="Leo is sitting in a chair looking at the camera with a slight smile." />
                    <div className="about-section">
                        <div className="about-sub-section">
                            <p className="about-section-title">Hello, my name is Leo.</p>
                            <p>I like making software that helps people. I love everything tech including web development, desktop apps, cloud computing, and computer hardware.</p>
                            <p>I graduated from <a href="https://www.whitworth.edu/cms/academics/undergraduate-majors-and-programs/computer-science-ba-bs/">Whitworth University</a> in May 2020, and
                            I'm currently a tools engineer at <a href="https://www.bungie.net/">Bungie</a>.</p>
                        </div>
                        <div className="about-sub-section">
                            <p className="about-section-title">On a personal note...</p>
                            <ul>
                                <li>I've been playing piano for {yearsSinceStartingPiano} years and guitar for a couple years</li>
                                <li>I'm a longtime Seahawks fan and enjoy watching football</li>
                                <li>I've recently gotten into hockey and follow both the Seattle Kraken and Carolina Hurricanes</li>
                                <li>I love playing video games. Some favorites include: Destiny 2, Minecraft, Assassin's Creed, Dark Souls, Civilization 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <hr />
                <div className="about-section about-sub-section">
                    <p className="about-section-title">My Skills and Experience</p>
                    <p>This section is currently being built. For the time being, please refer to my <a href="https://docs.google.com/document/d/11G1d9bD6sqwyv7LiQaNWtwmc01wNm1bpDjVTZphGSPg/edit?usp=sharing">resume</a>!</p>
                </div>
            </div>
        )
    }
}

export default AboutPage;