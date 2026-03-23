const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is our Home Page")
})
app.get('/contact', (req, res) => {
    res.send("This is our Home Page")
})
app.get('/about', (req, res) => {
    res.send("This is our Home Page")
})