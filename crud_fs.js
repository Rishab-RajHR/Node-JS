const fs = require('fs');
const path = require('path');

const myCRUD = path.join(__dirname, "CRUD");
const myPath = `${myCRUD}/crud.txt`;
// create
fs.writeFileSync(myPath, 'Create Read Update Delete');