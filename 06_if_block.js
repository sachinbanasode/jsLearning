console.log("Start");
var num = 10;
if (num > 0) {
  console.log("Numbre is positive");
}
console.log("end");

var ageForVote = 20;
if (ageForVote >= 18 == true) {
  console.log("you are eligible for voting");
  console.log(`age is: ${ageForVote}`);
}
console.log("End of next if block");

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  }
  if (num % 2 != 0) {
    return "Odd";
  }
}
var result = checkEvenOdd(45);
console.log(`Given Number  ${num} Is ${result}`);
