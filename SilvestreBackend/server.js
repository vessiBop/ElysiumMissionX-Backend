const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const { gettingInfo } = require('./Controllers/SelectingNamesEmailsPw')
const { post } = require('./Controllers/Posting');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATA
}) 

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', gettingInfo);

app.post('/', post);


const PORT = 4000
app.listen(PORT, () => {
    console.log('Server is running');
});