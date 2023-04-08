const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51];
const newArray = [];
array.forEach((element) => {
  if (element >= 50) {
    newArray.push(element);
  }
});
console.log(newArray);
const arrayElement = array.filter((currentValue) => {
  return currentValue >= 50;
});
console.log(arrayElement);
console.log(" Array of element greater than 50"); //Short method
const arrayElement1 = array.filter((currentValue) => currentValue >= 50);
console.log(arrayElement1);

console.log("Even number Array");
const arrayElement2 = array.filter((currentValue) => currentValue % 2 == 0);

console.log(arrayElement2);
