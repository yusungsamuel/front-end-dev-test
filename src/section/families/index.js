import React from "react"
import {Row, Column} from "../../components/grid"
import "./style.css"

export function Families () {
    return (
        <Row>
            <Column
            width="12"
            extraClass="families"
            >
                <div className="families-content">
                    <h2 id="families-title">Family Bonding</h2>
                    <button className="btn families-button">Learn More</button>
                </div>
            </Column>
        </Row>
    )
}