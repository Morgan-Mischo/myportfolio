import React, { Component } from "react";
import '../styling/landing.scss'; 

class Landing extends Component {
    constructor() {
        super();
    }

    render() {
        console.log("hitting header")
        return (
            <div className="background">
            <div id="landing">
                <div id="word_box">
                <div id="full">FULL-STACK</div>
                <div id="web">WEB DEV</div>
                </div>
            </div>
            </div>
        )
    }
}

export default Landing; 