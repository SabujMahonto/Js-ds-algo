// algorithm
// time complexity
// space complexity
// asymptotic notations 
// 1. Big o notations
// 2. Omega notations 
// 3. Theta notations

// Find the time complexity 

const arr = [10,20,30,40,50];
function sum(arr){
   let sum = 0;                           // executing time  =  1

   for(let i = 0; i < arr.length; i++){
    sum = sum + arr.at(i)                //  executing time  =  arr.length = 5  / n + 2 / or n
   }
   return sum;                          //  executing time  =   1 
}                                                                                                  

console.log(sum(arr)); // O(n) -linear time  complexity or space complexity


function sum1(num1, num2){
    return num1 + num2
}

console.log(sum1(10,20)); // O(1)  -constant time complexity

