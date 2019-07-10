import React from "react"
import { Row, Column } from "../../components/grid"
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
                    <h2 id="rating-title">Many Customer Reated Us Five Starts on Google</h2>
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
                
            </Column>
        </Row>
    )
}
