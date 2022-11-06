const express = require('express');
const router = express.Router();
const pool = require('./db')


 router.get('/authentication/student-info', (req, res) => {
    pool.query(`SELECT name, email, password FROM studentTable`, (error, result) => { 
        res.send(result)
    
})});

module.exports = router;