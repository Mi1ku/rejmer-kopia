/*
Apka express ktora sie tworzy i ma port 3000 i ma biblioteke express
oraz biblioteke fs i nom i ma endpointy do geta i sprawdzanie id czy jest w zakresie
oraz parsowanie jsona i wypiswanie go pod adresem api/v1/tours
*/


// biblioteka express
const express = require('express');
// biblioteka fs 
const fs = require('fs');
/*
<----------------------------------------->
            Serwer w Express
<----------------------------------------->
*/
// stala app z przypisanym express
const app = express();
// stala port z portem
const port = 3000;
// stala tours z danymi z pliku json sparsowanymi
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// get api/v1/tours z danymi z tours
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    results: tours.length,
    status: 'success',
    data: {
      tours
    }
  });
});

// post api/v1/tours z dodaniem nowego tour i dodanie go do pliku json
app.post('/api/v1/tours', (req, res) => {
     const noweId = tours[tours.length - 1].id + 1;
     const nowyTour = Object.assign({ id: noweId }, req.body);
     tours.push(nowyTour);
     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
         res.status(201).json({
                status: 'success',
                data: {
                    tour: nowyTour
                }
         });
     });
});
// get api id
app.post('/api/v1/tours:id', (req, res) => {
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Za duże id'
        });
    }
    const tour = tours.find(el => el.id === id);
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    });
});  
// słuchanie portu i log w konsoli
app.listen(port, () => {
  console.log(`Apka działa na porcie ${port}...`);
});