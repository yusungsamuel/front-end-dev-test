import React from "react"

export function Row ({children}){
    return (
        <div className="row">
            {children}
        </div>
    )
}

export function Column (props){
    return (
        <div className={"col-" + props.width}>
            {props.children}
        </div>
    )
}