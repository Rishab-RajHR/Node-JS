const express = require('express');

const app = express();

app.get('', (req,res) => {
    res.send('Good Morning From Express JS')
})
app.listen(1000);