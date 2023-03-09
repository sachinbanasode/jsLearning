//Wap to print number 0 to 10

var index =0;   //initialization
while (index<10) {//condition
    console.log(index);
    index++;   //Update expresion
}

var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];
var index1=0;
while (index1<arrayOfNumbers.length) {
    console.log(index1);
    index++
}

// let i = 0;
// while(i<arrayOfNumbers.length){
//     console.log(i);
//     i++;
// }
console.log("Even numbers");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index=0; // initialization
let sum = 0;
while (index<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index];
    if(element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index++; // Update Expression
}





