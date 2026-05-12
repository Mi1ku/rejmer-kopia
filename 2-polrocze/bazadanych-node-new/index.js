// Import bibliotek
const express = require('express');
const mysql = require('mysql2');

// Konfiguracja ekspresa
const app = express();
const port = 3000;
app.use(express.json());

// nasluchiwanie
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});

// Polaczenie z DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vapeshop'
});

// wyswietl
app.get('/klienci', (req, res) => {
    db.query('SELECT * FROM klienci', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// stworz 
app.post('/klienci', (req, res) => {
    const {id, imie_nazwisko, karta_konfidenta} = req.body;
    db.query(
        'INSERT INTO klienci (id, imie_nazwisko, karta_konfidenta) VALUES (?, ?, ?)',
        [id, imie_nazwisko, karta_konfidenta],
        (err, results) => {
            if (err) throw err;
            res.json({ id: results.id, imie_nazwisko, karta_konfidenta });
        }
    );
});

// zaktualizuj
app.put('/klienci/:id', (req, res) => {
    const id = req.params.id;
    const {imie_nazwisko, karta_konfidenta} = req.body;
    db.query(
        `UPDATE klienci SET imie_nazwisko=?, karta_konfidenta=? WHERE id=?`,
        [imie_nazwisko, karta_konfidenta, id],
        (err) => {
            if (err) throw err;
            res.send(`Zaktualizowano dane dla id: ${id}`);
        }
    );
});

// usuwanie
app.delete('/klienci/:id', (req, res) => {
    const id = req.params.id;
    db.query(
        `DELETE FROM klienci WHERE id=?`,
        [id],
        (err) => {
            if (err) throw err;
            res.send(`Usunięto konfidenta o id: ${id}`);
        }
    );
});