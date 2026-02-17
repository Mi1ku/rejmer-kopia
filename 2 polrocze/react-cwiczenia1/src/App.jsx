import { useState } from 'react'
import "./App.css"
import HelloReact from "./components/helloreact"
import Elements from "./components/elements"
import NamesList from "./components/nameslist"
import ImgInternet from "./components/imginternet"
import ImgAssets from './components/imgassets'
import ImgPublic from './components/imgpublic'
import Props from './components/props'
import Students from './components/Students'
import Clicker from './components/clicker'
import Showtext from './components/showText'
import ChangeColor from './components/changeColor'
import AddList from './components/addList'
import SimpleCalculator from './components/simpleCalculator'
function App() {

  return (
    <>
      {/* Zad 1 */}
      <HelloReact />
      {/* Zad 2 */}
      <Elements imie="Mikołaj" wiek="18"/>
      {/* Zad 3 */}
      <NamesList />
      {/* Zad 4 */}
      <ImgInternet />
      {/* Zad 5 */}
      <ImgAssets />
      {/* Zad 6 */}
      <ImgPublic />
      {/* Zad 7 */}
      <Props imie="Mikołaj"/>
      {/* Zad 8 */}
      <Students imie="Adam" wiek="18"/>
      <Students imie="Piotr" wiek="18"/>
      <Students imie="Mikołaj" wiek="19"/>
      {/* Zad 9 */}
      <Clicker />
      {/* Zad 10 */}
      <Showtext />
      {/* Zad 11 */}
      <ChangeColor />
      {/* Zad 12 */}
      <AddList />
      {/* Zad 13 */}
      <SimpleCalculator />
      <a href="https://docs.google.com/document/d/1aiGSX94GswdxmvXLdmuM0FV6vtwp84_izWCSy03sVaM/edit?tab=t.0">Zadania React INF04</a>
    </>
  )
}

export default App
