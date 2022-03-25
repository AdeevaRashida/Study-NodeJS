//import module express yang dibutuhkan
const express = require('express');

//buat express app
const app = express();

const helloworld = (req, res) => {
    //kirim data hello world ke Client
    res.send('Hello World');
}

// buat sebuat route '/' dengan menggunakan express middleware
app.get('/', helloworld)

//Tambahkan server ke port
app.listen(3000, () => {
    console.log('server berjalan di port 3000')
})