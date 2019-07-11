import React from "react"
import "./style.css"

export function Footer () {
    return (
        <footer className="mt-5 text-center">
            <b ><p>Follow Us:</p></b>
            <a href="https://www.instagram.com/"><img className="m-2 social-media-icon" src="/assets/image/instagram.svg" /></a>
            <a href="https://www.facebook.com/"><img className="m-2 social-media-icon" src="/assets/image/facebook.svg" /></a>
        </footer>
    )
}