
var arrayOfNumbers = [0, 2, 4, 5, 6, 7, 8, 8, "nine", "ten"];
console.log(arrayOfNumbers);
console.table(arrayOfNumbers);

const totalArrayElements = arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);

//Find the element available oor not 
const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available: ${is8Available}`);

const is9Available = arrayOfNumbers.includes(9);
console.log(`Is 9 available: ${is9Available}`);

//Find the Index of element
const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `);

var arrayOfNumbers1 = [10, 20, 25, 30, 5];
console.log(arrayOfNumbers1);
const valueAtIndex2 = arrayOfNumbers1[2];
console.log(`Value at index 2 is:${valueAtIndex2}`);

arrayOfNumbers1[3]= 35;
console.log(arrayOfNumbers1);

arrayOfNumbers1[1]= 50;
console.log(arrayOfNumbers1);

//Add element at last position
console.log("====Add element at last position=====");
arrayOfNumbers1.push(40);
console.log(arrayOfNumbers1);

//Add element at first position
console.log("=====Add element at first position==========");
arrayOfNumbers1.unshift(36);
console.log(arrayOfNumbers1);

// Removing element at last position
console.log("=====Removing element at last position==========");
arrayOfNumbers1.pop();
console.log(arrayOfNumbers1);

// Removing element at first position
console.log("=====Removing element at first position==========");
arrayOfNumbers1.shift();
console.log(arrayOfNumbers1);


//copy part of gajanan sir
// var arrayOfNumbers2 = [ 101, 210, 225, 215, 230, 15];
// console.log(arrayOfNumbers2);
// console.log("==== Removing last element using pop() === ");
// arrayOfNumbers2.pop();
// console.log(arrayOfNumbers2);
// console.log("==== Removing first element using shift() === ");
// arrayOfNumbers2.shift();
// console.log(arrayOfNumbers2);

var arrayOfNumbers3 = [10, 20, 25, 15, 30, 5, 40, 45] ;
console.log(arrayOfNumbers3);
console.log("=====slice(startIndex)====");
const arrayFronIndex3 = arrayOfNumbers3.slice(3);
console.log(arrayFronIndex3);

console.log('====slice(startIndex,endIndex)=====');
const subarray = arrayOfNumbers3.slice(2,5);
console.log(subarray);

console.log('===splice(startIndex)======');
const spliceArray = arrayOfNumbers3.splice(3)
console.log(`Removed elements of array is: ${spliceArray}`);
console.log(arrayOfNumbers3);

console.log('====splice(startIndex,deleteCount)=======');
const splicedArrayWithDeleteCount = arrayOfNumbers3.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers3);


var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
const splicedArrayWithDeleteCount1 = arrayOfNumbers.splice(3, 1);
console.log(splicedArrayWithDeleteCount1);

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
const splicedArrayWithDeleteCoun = arrayOfNumbers.splice(1, 2);
console.log(splicedArrayWithDeleteCoun);
console.log(arrayOfNumbers);

//Insert element at any position
console.log('======================splice() to insert one element without replacing element=================');
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
arrayOfNumbers.splice(2, 0, 22);
console.log(arrayOfNumbers);


console.log('======================splice() to insert three element without replacing element=================');
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
//5, 35, 55 three no insert
arrayOfNumbers.splice(4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log('======================splice() to insert and replacr element =================');
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers);
arrayOfNumbers.splice(2, 1  , 50, 50);
console.log(arrayOfNumbers);
