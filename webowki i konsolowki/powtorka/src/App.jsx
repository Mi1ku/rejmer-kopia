import './App.css'
import Imiona from './components/tablica.jsx'
import obrazekassets from './assets/vsc.png'
import Hello from './components/Hello.jsx'
import Student from './components/Student.jsx'
import Licznik from './components/licznik.jsx'
import ShowText from './components/showText.jsx'
import ZmienKolor from './components/zmienKolor.jsx'
import ListaDodaj from './components/listaDodaj.jsx'
import DodajLiczby from './components/dodajLiczby.jsx'
import Quiz from './components/quiz.jsx'
// const imionka = ["Jan","Kasia","Piotr"]

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <p>Mam na imię Mikołaj</p>
      <p>Mam 18 Lat</p>
      {/*
      <li>{imionka[0]}</li>
      <li>{imionka[1]}</li>
      <li>{imionka[2]}</li>
      */}
      <Imiona />
      <img 
        src="https://logospng.org/download/vite-js/vite-js-4096-logo.png"
        >
        </img>
      <h3>Miśka</h3>
      <img src={obrazekassets} alt="Visual Studio Code"></img>
      <p>Obrazek Assets</p>
      <br></br>
      <img src="teamviewer.png" alt="TeamViewer"></img>
      <p>Obrazek Public</p>  
      <Hello name="Mikołaj"/>
      <h2>Lista uczniów: </h2>
      <Student name="Mikołaj" age="18"/>
      <Student name="Kasia" age="17"/>
      <Student name="Piotr" age="19"/>
      <Licznik />
      <ShowText />
      <ZmienKolor/>
      <ListaDodaj />
      <DodajLiczby />
      <Quiz />
    </>
  )
}

export default App
