const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array is:  ${arrayNumbers}`);

console.log(
  "--------step 1------------- Total elements available in given array-"
);
const lengthOfElements = arrayNumbers.length;
console.log(`1)  Length of given array is:  [${lengthOfElements}]`);

console.log("---------step 2 -----------Print First element and Last Element");
const firstElement = arrayNumbers.slice(0, 1);
const lastelement = arrayNumbers.slice(arrayNumbers.length - 1);
console.log(
  `2)  First element is: [${firstElement}] and Last element is [${lastelement}]`
);

console.log(
  "---------step 3 -----------Third last element using length property"
);
const thrirdlastelement = arrayNumbers.slice(
  arrayNumbers.length - 3,
  arrayNumbers.length - 2
);
console.log(`3)  Third last element is: [${thrirdlastelement}]`);

console.log("-------step 4 ---------------All even Numbers in Given array");
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  let element1 = 0;
  if (element % 2 == 0) {
    console.log(`4)  even element is:[${element}] `);
  }
}

console.log(
  "-------------------step 5 -------------All Odd Numbers in Given array"
);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 1) {
    console.log(`5)  Odd element is:[${element}] `);
  }
}

console.log(
  "----------------step 6 ---------------Find the even positioned element ad sum it"
);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (index % 2 == 0) {
    console.log(`  even Position element is:[${element}] `);
  }
}
let evenSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (index % 2 == 0) {
    evenSum = evenSum + element;
  }
}
console.log(`Evwn sum = ${evenSum}`);

console.log(
  "------------------step 7 -----------------Find the Odd positioned element ad sum it"
);
console.log(`Given Array is:  ${arrayNumbers}`);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (index % 2 != 0) {
    console.log(` Odd Position element is:[${element}] `);
  }
}

let oddSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];

  if (index % 2 != 0) {
    oddSum = oddSum + element;
  }
}
console.log(`Odd sum = ${oddSum}`);

console.log("---------------------step 8 ---------------Sum Of All Element -");
let allSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  allSum = allSum + element;
}
console.log(` Sum Of All Element is: ${allSum}`);

console.log(
  "-------------------step 9 ------------Numbers of given array which are multiple of 5"
);

for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    console.log(`Numbers which are multiple of 5 is:  [${element}]`);
  }
}

console.log(
  "---------------------step 10 ------------is number 115 available in given array ?"
);

let available = arrayNumbers.includes(115);
console.log(`115 available is:${available}`);

console.log(
  "---------------------step 11 ------------is number 23 available in given array ?"
);

let availableis = arrayNumbers.includes(23);
console.log(`23 available is:${availableis}`);

console.log(
  "-----------------step 12 -----------------Insert number --55, 66 before index 3"
);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);

console.log(
  "------------------step 13 -----------------delet 3 elements starting fron index 4"
);
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);
