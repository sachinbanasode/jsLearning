console.log("-------------------------Quation 1--------------------------");
function greaterNumber(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1}  greater than ${num2} `);
  } else {
    console.log(`${num2}  greater than ${num1} `);
  }
}
greaterNumber(10, -10);
greaterNumber(800, 899);
greaterNumber(312, 506);

console.log("-------------------------Quation 2--------------------------");

function isEvenOrOddNum(num) {
  if (num % 2 == 0) {
    var str = `${num} is Even`;
    return str;
  } else {
    var str = `${num} is Odd`;
    return str;
  }
}
var result = isEvenOrOddNum(29);
console.log(result);
var result = isEvenOrOddNum(44);
console.log(result);
var result = isEvenOrOddNum(0);
console.log(result);
var result = isEvenOrOddNum(101);
console.log(result);

console.log("-------------------------Quation 3--------------------------");

function wordLength(word) {
    var wordLength = word.length;
    // console.log(wordLength);

    if (wordLength%2==0) {
    console.log(`Character length of ${ word} is Even`);
        
    } else {
        console.log(`Character length of ${ word} is Odd`);
    }    
}
wordLength("javaScript");
wordLength("developer");
wordLength("Google");
