import React from "react";

const SquareC = (props) => {
    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <div
            className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
            onClick={() => props.onClick(props.index)}>
           {props.state}
        </div>
    )
}
export default SquareC