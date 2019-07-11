import React from "react"
import { Row, Column } from "../../components/grid"
import {Carousel} from "../../components/carousel"
import "./style.css"

export function Rating() {
    return (
        <Row
        extraClass="rating"
        >
            <Column
                width="6"
                extraClass="text-left"
            >
                <div className="rating-content">
                    <h2 id="rating-title">Many Customer Rated Us Five Stars on Google</h2>
                    <i class="fas fa-star fa-lg mx-1"></i>
                    <i class="fas fa-star fa-lg mx-1"></i>
                    <i class="fas fa-star fa-lg mx-1"></i>
                    <i class="fas fa-star fa-lg mx-1"></i>
                    <i class="fas fa-star fa-lg mx-1"></i>
                </div>
            </Column>
            <Column
                width="6"
            >
                <Carousel></Carousel>
            </Column>
        </Row>
    )
}
