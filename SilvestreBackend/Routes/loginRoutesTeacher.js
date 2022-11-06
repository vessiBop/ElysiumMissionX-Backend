const express = require('express');
const pool = require('./db');
const router = express.Router();



router.post('/authentication/teacher-info', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    pool.query(`SELECT email, password FROM \`missio20_team4\`.teacher WHERE email = ${email} AND password = ${password}`,
    [email, password],
    (error, result) => {
        if (error) {
            res.send({error: error});
        }

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ message: "Wrong email/password"})
        }
        }
    
    )});

module.exports = router;