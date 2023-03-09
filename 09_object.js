
// Object literals
let student = {
    firstName: "Sachin",
    lastName: "Banasode",
    isWorking: true,
    age: 27,
    collegeName: "KEC",
    id: 12543
}
console.table(student);
typeof student
console.log(typeof student);
//. dot Notation 
console.log(student.firstName);
//[] notation
console.log(student["lastName"]);
//Update property
// let ccollegeName = "KEC"
// console.log(collegeName);
//Update property
// student.collegeName ="CEOP PUNE";
// console.log(student.collegeName);

student.age = 30;
console.log(student.age);

//Add city = mumbai
student.city = "Mumbai"
console.table(student);

//Add country ="India"
student.country = "India"
console.table(student);

//Dealete any Property
delete student.isWorking;
console.table(student);

//Creat empty object
let teacher = { };
//add First name in teacher
teacher.firstName = "Mohit"
console.table(teacher);
//creat null variable
let name = null
console.table(name);


//empty array and put value
const array = [];
array[0] = 5;
console.log(array);