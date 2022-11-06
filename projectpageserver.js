const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "sg1-ts6.a2hosting.com",
  user: "missio20_team4",
  password: "2{g}.L13I.r9",
  database: "missio20_team4",
});

// get list of projects which are free of cost  .
app.post("/projects", (req, res) => {
  const { course, subscriptionType } = req.body;
  console.log(req.body);
  const queryString = `SELECT project_id, name, profile_pic FROM project WHERE subscription = '${subscriptionType}' AND course = '${course}'`;

  pool.query(queryString, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// get list of projects which are free of cost  .
app.get("/free", (req, res) => {
  pool.query(
    "SELECT project_id, name, profile_pic FROM project WHERE subscription = 'free' ",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

// use of body parameter router ...
app.post("/", function (req, res) {
  console.log(`Got some body params ${JSON.stringify(req.body)}`);
  res.json(`Got some body params ${JSON.stringify(req.body)}`);
});
// get list of projects which are available on premimum subscription .
app.get("/premimum", (req, res) => {
  pool.query(
    "SELECT name, profile_pic FROM project WHERE subscription = 'premimum' ",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
// list of projects for beginners .
app.get("/beginner", (req, res) => {
  pool.query(
    "SELECT name, profile_pic FROM project WHERE course = 'beginner'",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
//  list of  Intermediate projects .
app.get("/intermediate", (req, res) => {
  pool.query(
    "SELECT name, profile_pic FROM project WHERE course = 'intermediate'",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
// list pf Advanced projects
app.get("/advanced", (req, res) => {
  pool.query(
    "SELECT name, profile_pic FROM project WHERE course = 'advanced'",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.listen(4004);
