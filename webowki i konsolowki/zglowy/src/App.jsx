import { useState } from 'react'
import './App.css'
import obrazekAssets from './assets/miska.jpg'
import Hello from './components/Hello.jsx'
import Student from './components/Student.jsx'
import LicznikKlikniec from './components/LicznikKlikniec.jsx'
import PokazTekst from './components/PokazTekst.jsx'
import ZmianaKoloru from './components/ZmianaKoloru.jsx'
import ListaZDodawaniem from './components/ListaZDodawaniem.jsx'
import ProstyKalkulator from './components/ProstyKalkulator.jsx'
import Quiz from './components/Quiz.jsx'

function App() {
const imiona = ["Jan","Kasia","Piotr"];

  return (
    <>
      <h1>Hello React</h1>
      <p>Mikołaj</p>
      <p>Kuś</p>
      {imiona.map((imie,index) => 
        <li key={index}>{imie}</li>
      )}
      <img 
        src="https://th.bing.com/th/id/R.84581c066095e193013f502301b6f839?rik=h6pCbb50tRPbMg&pid=ImgRaw&r=0"
        >
        </img>
      <p> Obrazek z internetu </p>
      <img src={obrazekAssets} alt="Miska"></img>
      <p>Obrazek z assets</p>
      <img src="kylecrane.avif" alt="Kyle Crane"></img>
      <p>Obrazek z public</p>
      <Hello name="Mikołaj"/>
      <h3> Lista uczniów:</h3>
      <Student name="Mikołaj" age="18"/>
      <Student name="Kasia" age="17"/>
      <Student name="Piotr" age="19"/>
      <LicznikKlikniec />
      <PokazTekst />
      <ZmianaKoloru />
      <ListaZDodawaniem />
      <ProstyKalkulator />
      <Quiz />
    </>
  )
}

export default App
