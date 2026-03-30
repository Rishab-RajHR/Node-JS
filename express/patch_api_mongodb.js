const express = require('express');
const connnectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connnectDB();

app.use(express.json());

app.patch('/employees/:id', async (req, res) => {
    try {
      const employeeId = req.params.id;
      const updateData = req.body;

      const updateEmployee = await Employee.findByIdAndUpdate(employeeId,
        { $set: updateData },
        { new : true }
      );
      if(!updateEmployee) {
          return res.status(404).json({ msg : "Employee not found" });
      }
      res.json(updateEmployee);

    } catch (error) {
        console.log("Error updating Data:", error);
        res.status(500).send("Server Error")
    }
})

app.listen(2000, () => {
     console.log("Server is running on port no 2000");
})