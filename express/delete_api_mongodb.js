const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.delete('/employees/:id', async (req, res) => {
    try {
       const EmployeeId = req.params.id;
       const deleteEmployee = await Employee.findByIdAndDelete(EmployeeId);

       if(!deleteEmployee) {
           return res.status(404).json({ msg: 'Employee Not Found' });
       }
       res.json({ msg: 'Employee Deleted Successfully' });
    } catch (error) {
        console.log("Error while Deleting data: ", error);
        res.status(500).send("Server Error");
    }
})

app.listen(2000, () =>{
    console.log("Server is running on port no 2000");
})