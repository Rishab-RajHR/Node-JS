const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.use(express.json());

app.put('/employees/:id', async (req, res) => {
    try {
      
    } catch (error) {
      
    }
})