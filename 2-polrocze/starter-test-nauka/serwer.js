const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port} 🖥️`)
})

let items = [
    { id: 1, name: 'Element 1' },
    { id: 2, name: 'Element 2' },
    { id: 3, name: 'Element 3' }
]

let nextId = 4;

// get wszystkie items
app.get('/items', (req, res) => {
    res.status(200).json({
        status: true,
        data: items
    });
});

// get item po id
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const item = items.find(el => el.id === id);

    item ? res.json(item) : res.status(404).send('Nie znaleziono elementu');
});

// post dodaj
app.post('/items', (req, res) => {
    const newItem = {
        id: nextId++,
        name: req.body.name
    }
    items.push(newItem);
    res.json(newItem);
});

// put edytuj
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);

    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).send('Nie znaleziono elementu');
    }
});

// delete usun
app.delete('/items/:id', (req,res) => {
    const id = parseInt(req.params.id);
    items = items.filter(el => el.id !== id);

    res.send("Usunieto")
})