// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

// let n = 1;
// while (n <= 10) {
//   console.log('While Loop', n);
//   n++;
// }

// write a recursive - function called countToTen that mimics the while loop above.
// code here


const countToTen = (counter) => {
  if (counter === undefined) { // Safety Net: if no argument is passed.
    counter = 0;
  };
  if (counter > 10) { // Safety Net: if counter given > 10.
    console.log(`already past 10 no need to count!`);
  };
  if (counter < 10) { // Count recursivelly.
    ++counter;
    console.log(`Recursive Loop: ${counter}`);
    countToTen(counter);  
  };
};

// when you code is ready, un-comment the next line and run the file
countToTen();
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

//console.log(factorial(5));

// write the above functionin a recursive way.
const recursiveFactorial = num => {
  if (num === 0 || num === undefined) return 1;
  return num * recursiveFactorial(num -1);
};
// when you code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));
