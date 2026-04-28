// importy
const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;
const FILE = "server_file/dane.json";
const dane = czytajDane();

// uzywanie jsona w apce
app.use(express.json());

// pomocnicze funkcje - czytanie i zapisywanie danych 
function czytajDane() {
   return JSON.parse(fs.readFileSync(FILE));
}

function zapiszDane() {
    fs.writeFileSync(FILE, JSON.stringify(dane, null, 2));
}

// gety - pobieranie elementów

app.get('/dane', (req, res) => {
    res.json(dane);
});

app.get('/dane/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = dane.find(element => element.id === id);
    item 
        ? 
        res.json(item) 
        : 
        res.status(404).send("Nie znaleziono elementu o podanym id!");
});

// posty - dodawanie elementu 
app.post('/dane', (req, res) => {
    const newItem = {
        id: dane.length++,
        name: req.body.name
    }
    dane.push(newItem);
    zapiszDane(dane);
    res.json(newItem);
});

// puty -  edycja elementu
app.put('/dane/:id', (req, res) => {
    const id = parseInt(req.params.id);
});

// nasluchiwanie serwera
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port} 🚢`)
});