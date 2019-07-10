import React, { Component } from "react"
import { Row, Column } from "../../components/grid"
import "./style.css"


class Landing extends Component {
    state = {}


    render() {
        return (
            <Row>
                <Column
                    width="12"
                    extraClass="landing"
                >
                    <img className="logo" src="/assets/image/logo-white.svg" />
                    <div className="text-center welcome-text">
                        <h2 id="welcome">WELCOME TO</h2>
                        <h2 className="company-name">Rooster Grin</h2>
                        <button className="btn landing-btn">Learn More</button>
                    </div>
                </Column>
            </Row>
        )
    }
}

export default Landing;
