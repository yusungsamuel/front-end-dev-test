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
                        <p className="my-auto text-center" id="welcome">WELCOME TO</p>
                        <p className="text-center company-name">Rooster Grin</p>
                </Column>
            </Row>
        )
    }
}

export default Landing;
