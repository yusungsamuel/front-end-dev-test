import React from "react"
import { Row, Column } from "../../components/grid"
import "./style.css"

export function Friends() {
    return (
        <Row
        >
            <Column
                width="6"
                extraClass="text-left"
            >
                <div className="mx-auto my-5 friends-text">
                    <h3 id="friends-title">Friends</h3>
                    <p>Looking for fun activities to do with your friends over the weekend, we can help you plan it. We have offers for activities ranging from outdoor, such as hiking, to indoor, such as karaoke. Just answer a few question and we can give you a few suggestion that you may like.</p>
                    <a id="friends-link" href="#">Learn More</a>
                </div>
            </Column>
            <Column
                width="6"
                extraClass="p-0"
            >
                <img id="friends-img" src="/assets/image/img-1.jpg" />
            </Column>
        </Row>
    )
}
