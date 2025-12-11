import React from "react";

export default function Student(props) {
    return (
        <>
        <ul>
        <li>
            Imie ucznia: {props.name}
        </li>
        <li>
            Wiek ucznia: {props.age}
        </li>
        </ul>
        </>
    )
}