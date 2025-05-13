function calculate(numOne: number, numTwo: number, operation: string): number | null{
    
    if (operation === '+') {
        return numOne + numTwo;
      } else if (operation === "-") {
        return numOne - numTwo;
      } else if (operation === "*") {
        return numOne * numTwo;
      } else if (operation === "/") {
        return numTwo !== 0 ? numOne / numTwo : null;
      } else {
        return null;
      }

}

console.log(calculate(0, 5, '/'));