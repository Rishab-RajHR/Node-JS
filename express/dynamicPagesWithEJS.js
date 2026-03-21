const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about/:name/:id', (req, res) => {
     const userInfo = {
         name : req.params.name,
         id : req.params.id
     }
     res.render('', {userInfo})
})

app.listen(2000)