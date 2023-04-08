'use strict'
//myName = "Virat"; // Not allowed 
let myName = "Virat"; 
console.log(myName); 
// delete myName;//Not allow in strict mode

// person = {  // Not allowed to define an object without var, let and const 
//     firstName: "Virat", 
//     lastName: "Kohli", 
//     age : 33 
// }

const student = {
    rollNo: 34,
    age: 17,
    city: "Pune"

}
delete student.age //Not allowed property is not deleted
console.log(student);
// student= null; // not allowed in strict mode
console.log(student);
 


