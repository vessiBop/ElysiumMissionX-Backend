const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
dotenv.config();
const { gettingInfo } = require('./Controllers/SelectingNamesEmailsPw')
const { post } = require('./Controllers/Posting');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATA
}) 

app.get('/', gettingInfo);
app.post('/sign-up-details', post);

const PORT = 4000
app.listen(PORT, () => {
    console.log('Server is running');
});

