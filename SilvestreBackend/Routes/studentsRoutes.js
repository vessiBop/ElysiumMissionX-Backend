const express = require('express');
const router = express.Router();
const pool = require('./db')


 router.get('/studentsRoutes', (req, res) => {
    pool.query(`SELECT name, email, password FROM studentTable WHERE teacher_id = 1`, (error, result) => { ;
        res.send(result)
    
})});

module.exports = router;