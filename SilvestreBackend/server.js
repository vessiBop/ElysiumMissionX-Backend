const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
dotenv.config();
const router = express.Router();
// Database config import
const pool = require('./Routes/db')


const app = express();


// Middlewares
app.use(cors());
app.use(express.json());



// Route imports
const signupRouter = require('./Routes/signupRoutes');
const studentInfo = require('./Routes/studentsRoutes');
const teacherSignUp = require('./Routes/teacherSignUpRoutes');
const teacherInfo = require('./Routes/loginRoutesTeacher')


// Routes
app.use(signupRouter);
app.use(studentInfo);
app.use(teacherSignUp);
app.use(teacherInfo);


const PORT = 4000
app.listen(PORT, () => {
    console.log('Server is running');
});

