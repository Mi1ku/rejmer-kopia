// importy
const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;
const FILE = "server_file/dane.json";
const data = readData();

// pomocnicze funkcje
function readData() {
   return JSON.parse(fs.readFileSync(FILE));
}

// gety
app.get('/dane', (req, res) => {
    res.json(data);
});

app.get('/dane/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(element => element.id === id);
    item 
        ? 
        res.json(item) 
        : 
        res.status(404).send("Nie znaleziono itemu o podanym id!");
});

// nasluchiwanie serwera
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port} 🚢`)
});