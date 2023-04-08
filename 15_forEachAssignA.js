const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(
  "--------------------------Array element and index values -------------------------"
);

console.log("arrow function");
arrayNumbers.forEach((currentValue, index, arrayNumbers) => {
  console.log(`arrayNumbers element is: ${currentValue} of index ${index}`);
});
console.log(
  "--------------------------Positive Number  of arrayNumbers -------------------------"
);

arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(` ${element}`);
  }
});
console.log(
  "--------------------------  Negative numbers of arrayNumbers -------------------------"
);

const negativearray = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    console.log(element);
  }
});
console.log(
  "--------------------------Even  values of arrayNumbers -------------------------"
);

arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});
console.log(
  "--------------------------Sum of all array element-------------------------"
);
var sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(sum);

console.log(
  "--------------------------Even index values -------------------------"
);

arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(element);
  }
});
