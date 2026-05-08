const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;
app.use(express.json());

// polaczenie z db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'szkola'
});

// get 
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// post
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.query(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email],
        (err, results) => {
            if (err) throw err;
            res.json({ id: results.id, name, email });
        }
    )
});

// update
app.put('/users/:id', (req, res) => {
    const {name, email} = req.body;
    db.query(
        `UPDATE users SET name = ?, email = ? WHERE id = ?`,
        [name, email, req.params.id],
        (err, results) => {
            if (err) throw err;
            res.json({
                message: "zaktualizowano",
                affectedRows: results.affectedRows,
            });
        }
    )
});

// nasluchiwanie 
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});