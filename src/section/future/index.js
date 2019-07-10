import React from "react"
import { Row, Column } from "../../components/grid"
import "./style.css"

export function Future() {
    return (
        <Row>
            <Column
                width="12"
                extraClass="future"
            >
                <div className="future-content">
                    <h1 id="future-title">Future Generation</h1>
                    <p>Planning to start a family? It can be a lot to plan and we can help with that. Studies show that the estimated cost of raising a child from birth through age 17 is $233,610 -- or as much as almost $14,000 annually</p>
                    <button className="btn future-button">Learn More</button>
                </div>

            </Column>
        </Row>
    )
}