
// Object literals
let student = {
    firstName: "Sachin",
    lastName: "Banasode",
    isWorking: true,
    age: 27,
    collegeName: "KEC",
    id: 1254,
    address: {
        city : "Pune",
        pin: 431204,
        street: "wakad",
    },
    school:"Podar school",
    friendes: ["Bill, Stew, Elon"],
    show : function () {
        console.log("I am show function");
        return "Hushar";
    },
    addressDetails: function () {
        this.address//this is referance variable
        return `Address is street ${this.address.street},city ${this.address.city}, PIN ${this.address.pin}`
    }
}

console.log(student.friendes.slice(2,2));

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

//access object in object property
console.log(student.address.city);

//update object in object
student.address.pin = 431205;
console.log(student.address.pin);

//add property
let marks  = {
    math : 80,
    physics: 70,
    drwing : 70
}

console.log(student.marks);
console.log(student.friendes[student.friendes.length-1]);

student.show();

let resultAddress = student.addressDetails();
console.log(resultAddress);