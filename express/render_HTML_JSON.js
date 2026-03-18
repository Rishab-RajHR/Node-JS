const express = require('express');

const app = express();

app.get('', (req, res) => {
     res.send(`
        <input type="text" placeholder="Your Name" />
        <a href='/contact'>Go to Contact us Page</a>
      `)
})

app.get('/contact', (req, res) => {
     res.send(`
        <h2>Hello Express JS</h2>
         <a href='/about'>Go to About Page</a>
      `)
})
app.get('/about', (req, res) => {
     res.send([
       { name: "Alex", address: 'ABC' },
       { name: "Tovino", address: 'DEF' },
       { name: "Basil", address: 'GHI' }
     ])
})

app.listen(2000);