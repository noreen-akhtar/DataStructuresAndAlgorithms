// Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12].
//  You need to find out whether a number is prime or 
// not (Hint: a prime number is a number that is divisible
//  by 1 and itself). What approach would you
//  take to do that? Support it with the relevant code.




let numberArray = [1, 8, 7, 3, 2, 9, 10, 12]

numberArray = numberArray.filter((number) => {  //The filter() method creates an array filled with all array elements that pass a test (provided as a function).

  for (let i = 2; i <= Math.sqrt(number); i++) {

    if (number % i === 0) return false;

  }

  return true;

});

console.log(numberArray);

// function isPrime(element, index, array) {
//   let start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }

// console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
// console.log([4, 5, 8, 12].find(isPrime)); 
