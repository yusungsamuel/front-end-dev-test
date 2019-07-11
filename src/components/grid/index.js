import React from "react"

export function Row (props){
    return (
        <div id={props.id} className={"row no-gutters" + " " + props.extraClass}>
            {props.children}
        </div>
    )
}

export function Column (props){
    return (
        <div className={"col-" + props.width + " " + props.extraClass} style={props.style}>
            {props.children}
        </div>
    )
}