const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log("-------------orignal  array -----------------------");

console.log(arrayRollNumbers);
console.log("-------------Reverse array -----------------------");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(
  "-------------sort array without any costom logic -----------------------"
);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(
  "1) Biggest number is move to last position 2) duplicate element is print back to back close to each other 3) smolest elememt is not move to first position "
);
console.log("-------------------------   sort array with costom logic in assending order ---------------------------------");
const sortedarray = arrayRollNumbers.sort((a, b) => {    
    return a>b ? 1 : -1;
});
console.log(sortedarray);

console.log("-------------------------   sort array with costom logic in decending order ---------------------------------");
const sortedarray1 = arrayRollNumbers.sort((a, b) => {    
    return a>b ? -1 : 1;
});
console.log(sortedarray1);

console.log("-------------------------   Greatest number from array ---------------------------------");
const largNo = sortedarray1[0];
console.log(largNo);
console.log("-------------------------  Smalest number from array ---------------------------------");
const smallNo = sortedarray1[sortedarray1.length-1];
console.log(smallNo);

console.log("-------------------------  Remove duplicates from array ---------------------------------");

//End***