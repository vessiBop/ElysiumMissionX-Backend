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


const post = (req, res) => {
    const { description } = req.body;
    connection.query(`INSERT INTO missio20_team4.tasks (name, email, password) VALUES ('${description}), NOW()`,
    (error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log(result);
            res.json(result);
        };
    });
};

module.exports = {
    post
} 