// app.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const rbacMiddleware = require('./rbacMiddleware');


const app = express();
app.use(bodyParser.json());
const secretKey = 'yourSecretkey';


/**
 * Simulate User Authentication
 */
app.post('/login', (req, res) => {
    const {username, role, permission} = req.body;
    const token = jwt.sign({username, role, permission}, secretKey);
    res.json({token})
});


/**
 * Protected Route for Admin Only
 */
app.get('/admin', rbacMiddleware('admin', 'manage_users'), (req, res) => {
    res.json({message: 'Admin Panel'});
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
})
