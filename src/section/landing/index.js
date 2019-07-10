import React, { Component } from "react"
import { Row, Column } from "../../components/grid"


class Landing extends Component {
    state = {}


    render() {
        return (
            <div className="container">
                <Row>
                    <Column
                        width="12"
                    >
                        <img src="assets/image/hero.jpg"></img>
                    </Column>
                </Row>
            </div>
        )
    }
}

export default Landing;
