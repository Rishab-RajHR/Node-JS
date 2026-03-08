// In Global we don't need to import and in Non-gobal we need to import

const myFile = require('fs');
console.log("Node JS Core Modules")  // global core modules

myFile.writeFileSync("coreModules.txt", "Node JS Core Modules Tutorial")   // non-global core modules