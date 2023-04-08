arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(
  "-------------------- Array of element greater than 50-------------------------------"
);
const arrayElement = arrayNumbers.filter((currentValue) => currentValue >= 50);
console.log(arrayElement);

console.log(
  "-------------------- Array of Even element -------------------------------"
);
const arrayEven = arrayNumbers.filter((currentValue) => currentValue % 2 == 0);
console.log(arrayEven);

console.log(
  "-------------------- Array of Odd element -------------------------------"
);
const arrayOdd = arrayNumbers.filter((currentValue) => currentValue % 2 == 1);
console.log(arrayOdd);

console.log(
  "-------------------- Array of  element which are multiple of 5 -------------------------------"
);
const arrayMultipl = arrayNumbers.filter(
  (currentValue) => currentValue % 5 == 0
);
console.log(arrayMultipl);

console.log(
  "-------------------- Array of  element which are Between 20 snd 50 -------------------------------"
);

const arrayElement1 = arrayNumbers.filter((currentValue) => {
  if (currentValue <= 50) {
    return currentValue >= 20;
  }
});
console.log(arrayElement1);
console.log(
  "----------------short method Array of  element which are Between 20 snd 50 ----------------"
);
const arrayMultip = arrayNumbers.filter(
  (currentValue) => currentValue >= 20 && currentValue <= 50
);
console.log(arrayMultip);
