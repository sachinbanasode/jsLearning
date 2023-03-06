console.log("----------Quation no 01-----------");

function voteEligibility(age) {
  if (age <= 0 || age > 100) {
    console.log(`In valid data : ${age}`);
  } else {
    if (age >= 18) {
      var str = `Hey your age is ${age} ,You are eligible for voting`;
      return str;
    }
    if (age < 18) {
      var str =(` your age is ${age} ,You are not eligible for voting`);
      return str;
    }
  }
}
var result = voteEligibility(45);
console.log(result);
var result = voteEligibility(17);
console.log(result);
var result = voteEligibility(8);
console.log(result);
var result = voteEligibility(20);
console.log(result);
var result = voteEligibility(-10);
console.log(result);
var result = voteEligibility(200);
console.log(result);
var result = voteEligibility(0);
console.log(result);

console.log("----------Quation no 02-----------");

function gradeCalculation(marks) {
  if (marks <= 0 || marks > 100 || (typeof marks != "Number" )) {
    console.log(`Please provide the valid marks`);
  } else {
    if (marks >= 90) {
      console.log(`Funtastic marks:${marks} your grade is A+`);
    }
    if (marks >= 75 && marks < 90) {
      console.log(`Excellent marks:${marks} your grade is A`);
    }
    if (marks >= 50 && marks < 75) {
      console.log(`Good marks:${marks} your grade is B`);
    }
    if (marks >= 35 && marks < 50) {
      console.log(`Need improvement marks:${marks} your grade is B`);
    }
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
