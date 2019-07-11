import React from "react"
import { Row, Column } from "../../components/grid"
import "./style.css"

export function Service() {
    return (
        <Row
            extraClass="service"
        >
            <Column
                width="6"
            >
                <div className="mx-auto my-5 friends-text">
                    <h2 id="service-title">Our Service</h2>
                    <p>We provide a wide range of services from event planning to personal assistant. There are a few pre-set plan for you to choose. If there is not a right one for you, we can customize it to suit your need.</p>
                    <b><a class="link" href="https://www.roostergrin.com/">> Learn More</a></b>
                </div>

                <p></p>
            </Column>
            <Column
                width="6"
                extraClass="service-right"
            >
                <Row
                    extraClass="my-5 mx-5"
                >
                    <Column
                        width="6"
                    >
                        <a className="service-link" href="https://www.roostergrin.com/our-services/web-design-development">
                            <div className="image-wrapper">
                                <img className="service-icon" src="/assets/image/home-expertise.svg" />
                                <h3 className="text-center service-name">Education</h3>
                            </div>
                        </a>

                    </Column>
                    <Column
                        width="6"
                    >
                        <a className="service-link" href="https://www.roostergrin.com/our-services/web-design-development">
                            <div className="image-wrapper">
                                <img className="service-icon" src="/assets/image/home-hygiene.svg" />
                                <h3 className="text-center service-name">Health</h3>
                            </div>
                        </a>

                    </Column>
                </Row>
                <Row
                    extraClass="my-5 mx-5"
                >
                    <Column
                        width="6"
                    >
                        <a className="service-link" href="https://www.roostergrin.com/our-services/web-design-development">
                            <div className="image-wrapper">
                                <img className="service-icon" src="/assets/image/home-lab.svg" />
                                <h3 className="text-center service-name">Experiment</h3>
                            </div>
                        </a>


                    </Column>
                    <Column
                        width="6"
                    >
                        <a className="service-link" href="https://www.roostergrin.com/our-services/web-design-development">
                            <div className="image-wrapper">
                                <img className="service-icon" src="/assets/image/home-retention.svg" />
                                <h3 className="text-center service-name">Daily Care</h3>
                            </div>
                        </a>


                    </Column>
                </Row>
            </Column>
        </Row>
    )
}