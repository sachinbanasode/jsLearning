let student = {
  firstName: "Sachin",
  lastName: "Banasode",
  isWorking: true,
  age: 27,
  collegeName: "KEC",
  id: 1254,
  city: "Mumbai"//destructuring with define value
};

// let firstName = student.firstName;
// let isWorkingStd = student.isWorking;
// let ageStd = student.age;
// let collegeNameStd = student.collegeName;

let { firstName, isWorking, age, collegeName, id, city="Pune"} = student; // Object Destructuring.
console.log(
  `Extracted Values from Object is:firstName ${firstName}, isWorking ${isWorking}, age ${age} , CollegeName  ${collegeName} id is ${id}, city is ${city}`
);


//Array Destructuting
 const array = [5, 6, 7, 8, 9];

 let [num1, num2, num3, num4, num5, num6] = array;
 console.log(num1, num2, num3, num4, num5, num6);