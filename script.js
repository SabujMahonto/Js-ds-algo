// algorithm
// time complexity
// space complexity
// asymptotic notations
// 1. Big o notations
// 2. Omega notations
// 3. Theta notations

// Find the time complexity

const arr = [10, 20, 30, 40, 50];
function sum(arr) {
  let sum = 0; // executing time  =  1

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr.at(i); //  executing time  =  arr.length = 5  / n + 2 / or n
  }
  // return sum; //  executing time  =   1
}

// console.log(sum(arr)); // O(n) -linear time  complexity or space complexity

function sum1(num1, num2) {
  return num1 + num2;
}

// console.log(sum1(10,20)); // O(1)  -constant time complexity

let n = 10;
for (let i = 1; i <= n; i++) {
  // 1 time executing
  for (let j = 1; j <= n; j++) {
    // 10 times executing
    // console.log(i, j); // O(n^2) -Quadratic time complexity
  }
}

// 3 nested for loop  == O(n^3) -cubic
// let n2 = 20;
// for(let i = 1; i <= n2; i++){
//     for(let j = 1; j <= n2; j++){
//         for(let k = 1; k <= n2 ; k++){
//             // console.log(i, j, k);
//         }
//     }
// }

// O(1) -- best
// O(n)--- Okay
// O(n^2) -- avoid
// O(n^3) -- avoid

// Object ---------->
// insert O(1)
// remove O(1)
// access O(1)
// search O(n)
// Object.keys O(n)
// Object.value O(n)
//  Object.entries O(n)

//array--------------->
// push(): O(1)
// pop(): O(1)
// shift(): O(n)
// unshift(): O(n)
// unshift(): O(n)
// arr[6] :  O(1)
// arr loop /search : O(n)
// slice or splice : O(n)
// forEach() or map() : O(n)

// fibonacci series
// fibonacci(2) --> (0,1)
// fibonacci(3) --> (0,1,1)
// fibonacci(4) --> (0,1,2,3)
// fibonacci(5) --> (0,1,2,3,5)
// fibonacci(6) --> (0,1,2,3,5,8)
// fibonacci(7) --> (0,1,2,3,5,8,13)
// fibonacci(8) --> (0,1,2,3,5,8,13,21)

// n = (n-1) + (n-2)
// i = (i-1) + (i-2)

function fibonacci(n) {
  fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacci(4));

// time complexity  O(n);

// factorial
// n! = n (n-1)
// 8! = 8 (8 -1)!
// = 8! = 8 * 7!
// 0! --> 1;
// 5! --> 5 * 4 * 3 * 2 * 1
// 5! --> 5 * 4!
// 6! --> 6 * 5 * 4 * 3 * 2 * 1
// 7! --> 7 * 6!

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(6));
console.log(factorial(7)); // O(n)

// prime Number
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(9));
console.log(isPrime(3));
console.log(isPrime(6));
console.log(isPrime(8));
console.log(isPrime(3));
console.log(isPrime(1));
// time complexity linear O(n)

//power of two
function powerOfTwo(num) {
  if (num < 1) return false;
  while (num > 1) {
    if (num % 2 !== 0) return false;
    num = num / 2;
  }
  return true;
}
console.log("power of two");
console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(3));
console.log(powerOfTwo(4));
console.log(powerOfTwo(5));
console.log(powerOfTwo(9));
console.log(powerOfTwo(16));
// time complexity logarithmic O(logn)

// unit step
// x = n
// y = [1,1,1,1,1,1,.....n]
function unitStep(n) {
  y = [];
  for (let i = 0; i <= n; i++) {
    y.push(1);
  }
  return y;
}

console.log(unitStep(2));
console.log(unitStep(6));
console.log(unitStep(3));
console.log(unitStep(5));
console.log(unitStep(10));

// unit ramp
// x = n
// y = [1,2,3,4,......n]

function unitRamp(n) {
  let y = [];
  for (let i = 0; i <= n; i++) {
    y.push(i);
  }
  return y;
}

console.log(unitRamp(5));
console.log(unitRamp(10));

// unit impulse
// x = 0
// y = 1 otherwise 0
// y = [1,0,0,0,0,...n]
function unitImpulse(n) {
  y = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) y.push(1);
    else y.push(0);
  }
  return y;
}

console.log(unitImpulse(2));
console.log(unitImpulse(10));

// trapping rain water

function trappingRainWater(height) {
  let water = 0;
  let leftMax = -1;
  let rightMax = -1;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  if (height.length < 3) return water;
  while (leftIndex <= rightIndex) {
    leftMax = height[leftIndex] > leftMax ? height[leftIndex] : leftMax;
    rightMax = height[rightIndex] > rightMax ? height[rightIndex] : rightMax;

    if (leftMax > rightMax) {
      water += rightMax - height[rightIndex];
      rightIndex--;
    } else {
      water += leftMax - height[leftIndex];
      leftIndex++;
    }
  }
  return water;
}

console.log(trappingRainWater([5, 3, 4, 7, 3]));
console.log(trappingRainWater([5, 3, 4, 7, 3, 11, 5, 7, 6, 4, 3, 1, 5, 7]));

// Recursion
//part
//best case
//fibonacci

// recursive Fibonacci

function recursiveFibonacci(n) {
  if (n < 2) return n;

  const recursive = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  return recursive;
}
console.log(recursiveFibonacci(3));
