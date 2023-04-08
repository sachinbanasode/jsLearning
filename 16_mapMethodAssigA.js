arrayNumbers=[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("---------------------------Using map() add 10 in to each element----------------");
const arrayNew = arrayNumbers.map((element) => {
  return element + 10;
});
console.log(arrayNew);

console.log("---------------------------Using map() square the each element----------------");
const sqEachElement = arrayNumbers.map((element) => {
  return element**2;
});
console.log(sqEachElement);

console.log("---------------------------Using map() add the index value in each element----------------");
const addIndexValue = arrayNumbers.map((element, index) => {
  return element+ index;
});
console.log(addIndexValue);