import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return(
            <div id="home-page">
                <div className="vertical-split">
                    <div id="home-text">
                        <div id="home-horiz">
                            <h1>Hello, <br/>I'm Leo 👋</h1>
                            <img src="/img/me.jpg" className="panel"
                                alt="Black and white picture of Leo, wearing headphones and looking to the right." />
                        </div>
                        <hr />
                        <h2>I am a software engineer based in the Seattle area.</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;