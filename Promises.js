// let firstName = "Alex";
// let lastName = "";

// const setLastName = new Promise((resolve, reject) => {
//       setTimeout(() => {
//           lastName = "Pandian";
//           resolve();
//       }, 2000)
// })

// setLastName.then(() => {
//      console.log(firstName + " " + lastName)
// })

// Output : Alex Pandian



// Another technique

// let firstName = "Alex";
// let lastName = "";

// const setLastName = new Promise((resolve, reject) => {
//       setTimeout(() => {
//           // lastName = "Pandian";
//           resolve("Pandian");
//       }, 2000)
// })

// setLastName.then((data) => {
//      lastName = data;
//      console.log(firstName + " " + lastName)
// })
// console.log("Hello")




let firstName = "Alex";
let lastName = "";

const setLastName = new Promise((resolve,reject) => {
     setTimeout(() => {
         resolve("Pandian");
     }, 2000)
})
// async await
const displayFullName = async () => {
     lastName = await setLastName;
     console.log(`${firstName} ${lastName}`)
}
displayFullName()