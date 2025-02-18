import React from "react";

export default function NLCFuncComp(props) {
    return (
        <div>
            <h2> Demo: Function component Props</h2>
            <p> Lấy dữ liệu props để hiện thị </p>
            <p>Name: {props.name }</p>
            <p>Address: {props.address }</p>
            <p>Comp: {props.company }</p>
            <p>Name: {props.note }</p>

        </div>
    )
}