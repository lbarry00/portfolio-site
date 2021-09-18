import React, { Component } from "react";

class AboutSection extends Component {
    
    render() {
        let title, description, imageSrc, altText

        try {
            const aboutData = this.props.about;
            console.log(aboutData);
            
            title = aboutData.title;
            description = aboutData.description;
            imageSrc = aboutData.image;
            altText = aboutData.imageAlt;

        } catch(error) {

        }

        return(
            <div className="about-section">
                <div className="about-left">
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>
                <img src={imageSrc} alt={altText} className="panel"/>
            </div>
        )
    }
}

export default AboutSection;