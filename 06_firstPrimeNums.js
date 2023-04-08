
function primeNumbers(startValue,totalPrime) {
  let count = 0;
  let num = startValue;
  const arrayOfPrime = [];

  while (count < totalPrime) {
    let isPrimeNum = isPrimr(num);
    if (isPrimeNum) {
      count++;
      arrayOfPrime.push(num);
    }
    num++;
  }
  console.log(arrayOfPrime);
}

function isPrimr(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}

primeNumbers(10, 10);
primeNumbers(1000, 10);
primeNumbers(225, 10);
primeNumbers(225, 20);

