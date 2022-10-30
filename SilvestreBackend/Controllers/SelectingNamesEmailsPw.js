const express = require('express');
const app = express();
app.use(express.json());
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATA
}) 

const gettingInfo = (req, res) => {
    connection.query(`SELECT name, email, password FROM student WHERE teacher_id = 1`, (error, result) => { ;
        res.send(result)
    
})};

module.exports = {
    gettingInfo,
};