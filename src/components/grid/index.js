import React from "react"

export function Row (props){
    return (
        <div className={"row"+ " " + props.extraClass}>
            {props.children}
        </div>
    )
}

export function Column (props){
    return (
        <div className={"col-" + props.width + " " + props.extraClass}>
            {props.children}
        </div>
    )
}