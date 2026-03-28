const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.post('/employees', (req,res) => {
     try {
        const { name, email, position, department } = req.body;
     } catch (error) {
      
     }
})