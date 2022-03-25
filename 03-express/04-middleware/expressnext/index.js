require("dotenv").config();

const express = require("express");

// body-parser adalah middleware untuk menyaring data request
const bodyParser = require("body-parser");

//import module headers 
const headers = require('./middlewares/header');

//import module body
const body = require('./middlewares/body');

const app = express();

//Middleware
app.use(bodyParser.json(), headers);

// middleware hanya berlaku pada method post di index
app.post("/", bodyParser.urlencoded({extended: true}),
 body,
  (req, ews, next) => {
    res.send(req.body);
});

//middlewre untuk selain method POST di index /
app.use("/", (req, res, next) => {
    res.send(req.headers);
});

//port
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`);
  });