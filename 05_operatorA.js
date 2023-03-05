
console.log(`******Quation no. 1 **********`);

function squareOfWordLength(word) {

   
    var wordLength=word.length;
    console.log(` Total no of character available in the word ${ word} is: ${wordLength}`);

    var wordsquare = wordLength*wordLength;
    console.log( `Square of the ${ word}  length is ${wordsquare}`);
    // return square;
    
}
var java = squareOfWordLength( " JavaScript");
var google = squareOfWordLength( "Google Crome ");
var google = squareOfWordLength( "Developer Smart");


console.log(`******Quation no. 2 **********`);

function  stringass( ){
    var stringName = "I am Angular Developer";
    var stringNameLength = stringName.length;
    console.log(`Given string length is ${ stringNameLength }` );

    var stringWords = stringName.split(" ")
    console.log(stringWords );
    var p=stringWords.length
     console.log(p );
   var div = stringNameLength / p;
   console.log(`String Length And divid by total number words available in string is ${div}`);
    var multiplication = stringNameLength * p;
   console.log(`String Length And Multiply by total number words available in string is ${multiplication }`);
}
stringass ( );


