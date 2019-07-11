import React from "react"
import {Row, Column} from "../../components/grid"
import "./style.css"

const style = {
    backgroundImage: "url('./assets/image/banner-1.jpg')"
  };

export function Families () {
    return (
        <Row>
            <Column
            width="12"
            extraClass="families"
            style={style}
            >
                <div className="families-content">
                    <h2 id="families-title">Family Bonding</h2>
                    <a href="https://www.roostergrin.com/" className="btn families-button">Learn More</a>
                </div>
            </Column>
        </Row>
    )
}