const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const pool = require('./db')

router.post('/authentication/signup-student', (req, res) => {
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
});

module.exports = router;