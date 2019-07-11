import React from "react"
import { Row, Column } from "../../components/grid"
import "./style.css"

const style = {
    backgroundImage: "url('./assets/image/banner-2.jpg')"
  };

export function Future() {
    return (
        <Row>
            <Column
                width="12"
                extraClass="future"
                style={style}
            >
                <div className="future-content">
                    <h2 id="future-title">Future Generation</h2>
                    <p>Planning to start a family? It can be a lot to plan and we can help with that. Studies show that the estimated cost of raising a child from birth through age 17 is $233,610 -- or as much as almost $14,000 annually</p>
                    <a href="https://www.roostergrin.com/" className="btn future-button">Learn More</a>
                </div>

            </Column>
        </Row>
    )
}