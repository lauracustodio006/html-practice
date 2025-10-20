//Exercise 1 — Minimum
/*Write a function min that takes two numbers and returns the smallest one.*/
/*Hint:
Use an if statement or the ternary operator ? :.*/
function min(x, y){
    if (x > y){
        return y
    }else{
        return x
    }
}
console.log(min(0, 10));   // → 0
console.log(min(0, -10));  // → -10

//Exercise 2 — Recursion (isEven)
/*Define a recursive function isEven(n) that returns true if n is even, and false if n is odd.
Rules:
0 is even
1 is odd
For any other positive number N, its evenness is the same as N - 2*/
/*Hint:
If n becomes negative, you might need to take its absolute value (use Math.abs(n)).*/
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
console.log(isEven(50));  // → true
console.log(isEven(75));  // → false
console.log(isEven(-1));  // → ??

//Exercise 3 — Bean Counting
/*Write a function countBs(string) that returns how many uppercase 'B' characters are in the string.
Then write a generalized version countChar(string, char) that counts aany given charcter.
Finally, rewrite countBs to use countChar.*/
/*Hint:
Loop through each character in the string using for (let i = 0; i < string.length; i++).*/

function countBs(string){
let count = 0;
for(let i = 0; i < string.length; i++)
    if (string[i] == "B"){
    count = count + 1;
}return count;
}
console.log(countBs("BOB"));               // → 2

function countChar(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++)
        if (string[i] == char){
            count = count + 1;
        }return count
}
console.log(countChar("kakkerlak", "k"));  // → 4

//More exercices
//1. Greeting Function
/*Write a function greet(name) that prints "Hello, <name>!".*/
function greet(string){
    console.log("Hello, " + string +"!");
}
greet("Alice"); // → Hello, Alice!

//2. Power Function (Loop Version)
/*Write a function power(base, exponent) that returns base to the power of exponent using a loop.*/

function power(base, exponent){
    let result = 1
    for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}

console.log(power(2, 3)); // → 8

//3. Max of Three
/*Write a function maxOfThree(a, b, c) that returns the largest of the three numbers.*/

function maxOfThree(a, b, c){
    if (a > b && a> c ){
        return a;
    }else if (b > a && b> c){
        return b;
    } else return c;
}
console.log(maxOfThree(5, 9, 2)); // → 9

//4. Sum Range

/*Write a function sumRange(start, end) that returns the sum of all numbers between start and end (inclusive).*/
function sumRange(start, end){
    let num = 0;
    for(let i = start; i <= end; i++){
        num +=i;
    }
    return num;
}
console.log(sumRange(1, 5)); // → 15

//5. Factorial (Recursive)

/*Write a recursive function factorial(n) that returns the factorial of n.*/
function factorial(n){
    let fct = 1
    for(let i = 1; i <= n; i++){
        fct *= i;
    } return fct;
}
console.log(factorial(5)); // → 120

//6. Count Vowels

/*Write a function countVowels(str) that returns how many vowels (a, e, i, o, u) are in the string.*/
function countVowels(str){
    let vowels = 0
    for(let i = 0; i < str.length; i++){
        if("aeiou".includes(str[i].toLowerCase()))
            vowels += 1;
    } return vowels;
}
console.log(countVowels("hello world")); // → 3
console.log(countVowels("hEllo wOrld")); // → 3

//7. Find Minimum in Array

/*Write a function minInArray(arr) that returns the smallest number in an array.*/
function minInArray(arr){
    let arr_min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < arr_min){
            arr_min = arr[i];}
}return arr_min
}
console.log(minInArray([3, 1, 4, 2])); // → 1

//8. Reverse String

/*Write a function reverseString(str) that returns the string reversed.*/
function reverseString(str){
    let reverse = "";
for(let i = str.length - 1; i >= 0; i--){ 
     reverse += str[i];
    }return reverse;
}
console.log(reverseString("hello")); // → "olleh"

//9. Make Multiplier (Closure)

/*Write a function makeMultiplier(factor) that returns another function that multiplies any number by that factor.*/

function makeMultiplier(factor){
return function(num){
    return num * factor;
}
}
const double = makeMultiplier(2);
console.log(double(5)); // → 10

//10. Recursive Sum

/*Write a recursive function sumArray(arr) that returns the sum of all numbers in an array.*/
function sumArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length ; i++){
        sum = sum + arr[i]
    } return sum;
}
console.log(sumArray([1, 2, 3, 4])); // → 10