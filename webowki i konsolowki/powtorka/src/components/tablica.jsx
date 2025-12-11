import React from 'react';

function Imiona() {
    const tablica = ["Adam","Kasia","Piotr"]

    return (
    <>
        <ul>
        {
        tablica.map((imie,index) => 
        <li key={index}>{imie}</li>)
        }
        </ul>
    </>
    )
}
export default Imiona;