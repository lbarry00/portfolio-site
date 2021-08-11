import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return(
            <div id="home-page">
                <div className="vertical-split">
                    <div id="home-text">
                        <h1>Hello, <br/>I'm Lauren &#9996;</h1>
                        <h2>I am a software engineer based in the Seattle area.</h2>
                    </div>
                    <img src="/img/me.jpg" className="panel" alt="Black and white picture of me, wearing headphones and looking to the right."></img>
                </div>
                <hr/>
            </div>
        )
    }
}

export default HomePage;