console.log("******Quation No. 1 ***********"); 
function greaterNumber(num1 , num2 ) {

    var result = num1>num2? `${num1}"is greater than" ${num2}` :`${num2}"is greater than" ${num1}` 
console.log(result); 
}
 greaterNumber(10, -10 );
 greaterNumber(800, 899 );

 console.log("******Quation No. 2 ***********"); 

function isEvenOrOddNum(num) {
var result = num%2==0;
    return result;
}
var result = isEvenOrOddNum(29);
console.log(result);

var result = isEvenOrOddNum(44);
console.log(result);

var result = isEvenOrOddNum(101);
console.log(result);

console.log("******Quation No. 3 ***********"); 

function wordLength(word) {
    
    var wordLength = word.length;
    var result = wordLength%2==0 ? "Even" : "Odd";
    return result;
    
}
var result = wordLength("Javascript");
console.log(`The word length of "javascript" is ${result}`);

var result = wordLength("Developer");
console.log(`The word length of "Developer" is ${result}`);

var result = wordLength("Google");
console.log(`The word length of "Google" is ${result}`);