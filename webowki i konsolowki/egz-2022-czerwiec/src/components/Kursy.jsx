import {useState, React } from 'react'
import dane from '../objects/dane.jsx'

export default function Kursy() {
    return (
    <>
        <h2>Liczba kursów: {dane.length}</h2>
        <ol>
            {dane.map(kurs => (
                <li key={kurs.id}>{kurs.nazwakursu}</li>
            ))}
        </ol>
    </>
    )


}