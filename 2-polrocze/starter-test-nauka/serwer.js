const express = require('express');
const app = express();
const port = 3000;

let items = [
    { id: 1, name: 'Element 1' },
    { id: 2, name: 'Element 2' },
    { id: 3, name: 'Element 3' }
]


app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port} 🖥️`)
})

app.get('/items', (req, res) => {
    res.status(200).json({
        status: true,
        data: items
    });
});

app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const item = items.find(item => item.id === parseInt(id));
    if (!item) {
        return res.status(404).json({
            status: false,
            message: 'Nie znaleziono elementu o id ' + id
        });
    }
    res.status(200).json({
        status: true,
        data: item
    });
});