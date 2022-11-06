const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const pool = require('./db')


router.post('/authentication/teacher-signup', (req, res) => {
    const {name, email, password} = req.body;
    // pool.query(`SELECT * FROM teacher WHERE email = '${email}'`)
    // .then((result)=> {
    //     if(result) {
    //         res.json('User already taken') }
    //     else if(!result) {
            pool.query(`INSERT INTO \`missio20_team4\`.teacher (name,email,password) VALUES ("${name}", "${email}", "${password}");`, (error, result) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log(result)
                    res.json(result)
                    res.end()
                }
            })
        }
    )


module.exports = router;
