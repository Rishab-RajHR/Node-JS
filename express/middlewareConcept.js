const express = require('express');

const app = express();

app.get('/', (req,res) => {
     res.send("This is Our Middleware Tutorial in Express JS")
})
app.get('/about', (req,res) => {
     res.send("This is Our About Page")
})

app.listen(2000, () => {
     console.log("Server is Running on Port No 2000");
})