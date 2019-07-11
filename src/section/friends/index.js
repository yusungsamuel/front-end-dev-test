import React from "react"
import { Row, Column } from "../../components/grid"
import "./style.css"

export function Friends() {
    return (
        <Row
        id="friends"
        >
            <Column
                width="6"
                extraClass="text-left"
            >
                <div className="friends-text">
                    <h2 id="friends-title">Friends</h2>
                    <p>Looking for fun activities to do with your friends over the weekend, we can help you plan it. We have offers for activities ranging from outdoor, such as hiking, to indoor, such as karaoke. Just answer a few question and we can give you a few suggestion that you may like.</p>
                    <b><a class="link" href="https://www.roostergrin.com/">> Learn More</a></b>
                </div>
            </Column>
            <Column
                width="6"
            >
                <img id="friends-img" src="/assets/image/img-1.jpg" />
            </Column>
        </Row>
    )
}
