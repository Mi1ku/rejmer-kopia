/*
Apka express ktora sie tworzy i ma port 3000 i ma biblioteke express
oraz biblioteke fs i nom i ma endpointy do geta i sprawdzanie id czy jest w zakresie
oraz parsowanie jsona i wypiswanie go pod adresem api/v1/tours
*/
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}`)
)


app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port} 🖥️`)
})