const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors())

// Database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Define an API endpoint to get all customers
app.get('/api/customers', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM customers');
        connection.release();
        res.json(rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

const port = 3000; // Set your desired port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
