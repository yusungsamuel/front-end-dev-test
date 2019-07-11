import React from "react"
import "./style.css"

export function Carousel() {
    return (
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"><i class="fas fa-circle carousel-item-counter"></i></li>
                <li data-target="#carousel" data-slide-to="1"><i class="fas fa-circle carousel-item-counter"></i></li>
                <li data-target="#carousel" data-slide-to="2"><i class="fas fa-circle carousel-item-counter"></i></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active ">
                    <b className="reviewer">John Doe 08/08/2019</b>
                    <p>I love using Rooster Grin. I use Rooster Grin to help me with money management. After using it for 3 months, I saved over $2000 which I would probably spent it on unnecessary stuff if Rooster Grin didn't help me.</p>
                </div>
                <div class="carousel-item">
                    <b className="reviewer">Sam Smith 01/01/2018</b>
                    <p>Rooster Grin helped me manage my tour schedule. After using Rooster Grin, I didn't need to hire a manager or personal assistant anymore. Look out for my concert date on Rooster Grin.Rooster Grin helped me manage my tour schedule. After using Rooster Grin, I didn't need to hire a manager or personal assistant anymore. Look out for my concert date on Rooster Grin.Rooster Grin helped me manage my tour schedule. After using Rooster Grin, I didn't need to hire a manager or personal assistant anymore. Look out for my concert date on Rooster Grin.Rooster Grin helped me manage my tour schedule. After using Rooster Grin, I didn't need to hire a manager or personal assistant anymore. Look out for my concert date on Rooster Grin.</p>
                </div>
                <div class="carousel-item">
                    <b className="reviewer">John Doe 08/08/2019</b>
                    <p>I love using Rooster Grin. I use Rooster Grin to help me with money management. After using it for 3 months, I saved over $2000 which I would probably spent it on unnecessary stuff if Rooster Grin didn't help me.</p>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-angle-left carousel-control-icon fa-2x"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-angle-right carousel-control-icon fa-2x"></i></span>
                <span class="sr-only">Next</span>
            </a>
        </div>


    )
}