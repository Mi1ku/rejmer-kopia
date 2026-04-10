const express = require('express');
/*
<----------------------------------------->
                Express
<----------------------------------------->
*/

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res
        .status(200) 
        .json({
            message: 'Hello from the server side!',
            app: 'Natours'
        });
});

app.post('/', (req, res) => {
    res.send('You can post to this endpoint...');
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port} 🚀`);
});