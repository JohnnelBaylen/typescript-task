const results: string[] = [];

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    results.push("FizzBuzz");
  } else if (i % 3 === 0) {
    results.push("Fizz");
  } else if (i % 5 === 0) {
    results.push("Buzz");
  } else {
    results.push(i.toString());
  }
  
}

console.log(results[2]);   // Output: Fizz (i = 3)
console.log(results[4]);   // Output: Buzz (i = 5)
console.log(results[14]);  // Output: FizzBuzz (i = 15)
console.log(results[6]);   // Output: 7 (i = 7)