const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();
connectDB();


const getEmployees = async () => {
    const employees = await Employee.find();
    console.log("Employees Data Before Update: ", employees);
}

const updateEmployee = async (id, updatedData) => {
    const result = await Employee.updateOne({ _id: id}, {$set: updateData});
    console.log(
        result.nModified === 0 ? `No updates for employee ${id} ` : `Updated Employee Data: ${result}`
    )
}