const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  

// MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "komal123",       //my password
    database: "komal",
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message);
        return;
    }
    console.log("Connected to MySQL database");
});

// GET route to fetch data
app.get('/api/komal', (req, res) => {
    const sql = 'SELECT * FROM student'; 
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Query error:", err.message);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// POST route to insert data
app.post('/api/komal', (req, res) => {
    const { ID, NAME } = req.body;

    if (!ID || !NAME) {
        return res.status(400).send('ID and NAME are required');
    }

    const sql = 'INSERT INTO student(ID, NAME) VALUES (?, ?)'; 
    connection.query(sql, [ID, NAME], (err, result) => {
        if (err) {
            console.error('Insert error:', err);
            return res.status(500).send('Failed to insert data');
        }
        res.send(`Student with ID '${ID}' and NAME '${NAME}' added successfully`);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
