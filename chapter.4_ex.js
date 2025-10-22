//1. The sum of a range
/*Write a function range(start, end) that returns an array containing all the numbers from start to end (inclusive).
Then write a sum function that takes an array of numbers and returns the total.
As a bonus, make range accept a third argument that indicates the step value.*/

function range(start, end){
    let num = [];
    for(let i = start; i <= end; i++){
        num.push(i);
    }return num;
}
console.log(range(2,7));

function sum(num){
    let sum_arr = 0;
    for(let i = num[0]; i < num.length - 1; i++){
         sum_arr += num[i];
    }return sum_arr;
}
console.log(sum(range(2,7)));

function range(start, end, step = 1) {
  let num = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      num.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      num.push(i);
    }
  }return num;
}

console.log(range(2, 7, 2));   
console.log(range(5, 2, -1));  


//2. Reversing an array
/*Write two functions, reverseArray and reverseArrayInPlace.
reverseArray should produce a new array that is the reverse of the input array.
reverseArrayInPlace should modify the given array by reversing its elements in place.*/
function reverseArray(arr){
    let reverse = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i]);
    }return reverse;
}
console.log(reverseArray([-3,5,6,7,8]));

function reverseArrayInPlace(arr){
for(let i = 0; i < Math.floor(arr.length / 2); i++){
  let old = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = old;
 }return arr
}
console.log(reverseArrayInPlace(["A","B","C","D"]));

//3. A list
/*Write a function arrayToList that builds a list structure from an array.
Also write listToArray, prepend, and nth as helper functions to work with the list.*/
function arrayToList(array){
  let list = null
 for(let i = array.length - 1; i >= 0; i--){
  list = {value : array[i], rest: list};
  }return list;
}
console.log(arrayToList([10,20,30]));

function listToArray(list){
  let array = [];
  for(let node = list; node; node = node.rest) {
    array.push(node.value);
  }return array;
}
console.log(listToArray(arrayToList([10,20,30])));

//4. Deep comparison
/*Write a function deepEqual(a, b) that returns true only if a and b have the same value or identical properties recursively.
Handle cases where values are null or non-object types.*/
function deepEqual(a,b){
  if(a = b){
    return true;
  }
}

//5. Flattening
/*Use the reduce method in combination with concat to flatten an array of arrays into a single array containing all elements of the 
original subarrays.*/

//6. Looping a triangle
/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

//7. FizzBuzz
/*Write a program that prints the numbers from 1 to 100.
But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz".
For numbers that are multiples of both three and five, print "FizzBuzz".*/

//8. The sum of even numbers
/*Write a function sumEvenNumbers(array) that takes an array of numbers and returns the sum of only the even ones.*/

//9. Counting characters
/*Write a function countChar(string, char) that counts how many times char appears in string.
Next, write countBs(string) that counts how many uppercase “B” characters there are.*/

//10. The dominant writing direction
/*Write a function dominantDirection(text) that computes the dominant writing direction in a string of text (left-to-right, right-to-left, or top-to-bottom).
You can use the characterScript and countBy helper functions from the text scripts example in Eloquent JavaScript.*/