const arraySeasonalFruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
];
console.log(arraySeasonalFruits);

console.log(
  "========   Step 01   ===========   log the First and last element on console "
);
//log the First and last element on console
console.log(arraySeasonalFruits);
const firstElement = arraySeasonalFruits[0];
console.log(`First element is:- ${firstElement}`);

const lastElement = arraySeasonalFruits[arraySeasonalFruits.length - 1];
console.log(`Last element is:- ${lastElement}`);

console.log(
  "=====  Step 02 ======Add element  Papaya before the element banana and then log array on console"
);
console.log(arraySeasonalFruits);
arraySeasonalFruits.unshift("Papaya");
console.log(arraySeasonalFruits);

console.log("=====    Step 03   ======Remove Mango From array");
console.log(arraySeasonalFruits);
const removeMango = arraySeasonalFruits.splice(4, 1);
console.log(arraySeasonalFruits);

console.log(
  "=====   Step 04    ======Add element  Pineapple at the last position"
);
console.log(arraySeasonalFruits);
const addPineapple = arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);

console.log(
  "=====   Step 05   ======Insert element Dragon Fruit before water melon"
);
console.log(arraySeasonalFruits);
const insertDragonFruit = arraySeasonalFruits.splice(4, 0, "Dragon Fruit");
console.log(arraySeasonalFruits);

console.log("=====   Step 06   ====== Replace the element Orange with KiWi");
console.log(arraySeasonalFruits);
const replaceOrangeWithKiWi = arraySeasonalFruits.splice(2, 1, "KiWi");
console.log(arraySeasonalFruits);

console.log(
  "=====   Step 07   ====== log the element starting from index 1 to 4"
);
console.log(arraySeasonalFruits);
const subarry1to4 = arraySeasonalFruits.slice(1, 4);
console.log(subarry1to4);

console.log("=====   Step 08   ====== Last 3 elements using length property");
console.log(arraySeasonalFruits);
const last3Elements = arraySeasonalFruits.slice(
  arraySeasonalFruits.length - 3,
  arraySeasonalFruits.length
);
console.log(last3Elements);
