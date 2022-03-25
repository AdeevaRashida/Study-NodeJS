// require dotenv
require("dotenv").config();

// import express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // Jika portnya 5000 maka kita berada di production, selainnya berarti development
    if (process.env.PORT == 5000){
        res.send("Server Production");
    }else{
        res.send("Server Development");
    }
});

// listen to port
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port: ${process.env.PORT}`);
});