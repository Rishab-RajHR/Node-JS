const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretkey = 'jklsdobadn123';

app.post('/login', (req, res) => {
    const user = {
       username : "Alex",
       email : "alex12@gmail.com"
    }
})