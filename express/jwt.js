const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretkey = 'jklsdobadn123';

app.post('/login', (req, res) => {
    const user = {
       username : "Alex",
       email : "alex12@gmail.com"
    };
    const token = jwt.sign({ user }, secretkey, {expiresIn : '500s'});
    res.json({token})
})

const verifyToken = (req, res, next) => {
     const bearerHeader = req.header['authorization'];
     if(bearerHeader) {
        const token = bearerHeader.split("")[1];
        req.token = token;
        next();
     }
     else {
       res.status(403).json({ result : "Token is not valid"})
     }

}

app.post('/protected', verifyToken, (req, res) => {
    jwt.verify(req.token, secretkey, (err, authData) => {
        if(err) {
            res.status(403).json({ result : "Unauthorized user"})
        } else {
            res.json({
                message : "You are an authorized user",
                authData
            })
        }
    })
})

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
})