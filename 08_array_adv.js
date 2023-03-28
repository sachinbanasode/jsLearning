
// console.log(typeof result);

// console.log(arrayOfNames.length);
// console.log("Resize an array");

// arrayOfNames.length = 3;
// console.log(arrayOfNames.length);
// console.log(arrayOfNames);

// arrayOfNames.length = 7;
// console.table(arrayOfNames);

const array = [3, 4, 5, 6, 7, 2, 4, 5];
const setOfElement = new Set();
for (const element of array) {
    setOfElement.add(element);

}
console.table(setOfElement);

const arrayOfUniqueElements =  [...new Set(array)];
console.log(arrayOfUniqueElements);
