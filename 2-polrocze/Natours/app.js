const express = require('express');
const fs = require('fs');

/*
<----------------------------------------->
                Express
<----------------------------------------->
*/

const app = express();
const port = 3000;
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// app.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Hello from the server side!',
//     app: 'Natours'
//   });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: tours
    }
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port} 🚀`);
});