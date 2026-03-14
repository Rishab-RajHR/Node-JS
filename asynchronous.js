// console.log("a")
// console.log("b")
// console.log("c")


// Aynchronous programming => that do not block the execution of the code.

// console.log("a")
// setTimeout(()=>{
//     console.log("b")
// },2000)
// console.log("c")




// NodeJS disadvantage

let firstName = "Alex";
let lastName = "";
setTimeout(() => {
    lastName = "Pandian";
}, 2000)
console.log(firstName + " " + lastName)
// output: Alex because it will not wait for 2 seconds  (solution to it is async/await and promises)