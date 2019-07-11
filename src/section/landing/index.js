import React, { Component } from "react"
import { Row, Column } from "../../components/grid"
import "./style.css"

const style = {
    backgroundImage: "url('./assets/image/hero.jpg')"
  };
   

function Landing () {
    
        return (
            <Row>
                <Column 
                    width="12" 
                    extraClass="landing"
                    style={style}
                >
                    <img className="logo" src="./assets/image/logo-white.svg" alt="logo"/>
                    <div className="text-center welcome-text">
                        <h1 id="welcome">WELCOME TO</h1>
                        <h1 className="company-name">Rooster Grin</h1>
                        <a href="#friends" className="btn landing-btn">Learn More</a>
                    </div>
                </Column>
            </Row>
        )
}

export default Landing;
