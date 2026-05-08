const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// polaczenie z bazą
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'szkola'
});

// get do pobrania wszystkich users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// post do dodania nowego usera
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.query(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email],
        (err, results) => {
            if (err) throw err;
            res.json({ id: results.insertId, name, email });
        }
    );
});

// update usera
app.put('/users/:id', (req, res) => {
    const {name, email} = req.body;
    db.query(
        `UPDATE users SET name =?, email = ? WHERE id = ?`,
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

// delete usera
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.query(
        'DELETE FROM users WHERE id = ?',
        [id],
        (err, results) => {
            if (err) throw err;
            res.json({
                message: "usunięto",
                affectedRows: results.affectedRows,
            });
        }
    );
});

// sluchanie na porcie 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});