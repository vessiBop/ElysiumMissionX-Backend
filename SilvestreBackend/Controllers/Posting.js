const express = require('express');
const app = express();
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATA
}) 


const post = (req, res) => {
    const { name, email, password } = req.body;
    pool.query(`INSERT INTO \`missio20_team4\`.studentTable (name,email,password) VALUES ("${name}", "${email}", "${password}");`,
    (error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log(result);
            res.json(result);
            res.end()
        };
    });
};
app.use(express.json());

module.exports = {
    post
} 