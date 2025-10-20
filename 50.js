//section 1
/* 1.1. Declare a variable age and assign you age to it. Log its value.*/
var age;
age = 19;
console.log(age);
//> 19
/* Declare a varible isStudent and assign a boolean value. Log its type*/
var isStudent
isStudent = true
console.log(typeof isStudent)
//>boolean
/* Declare a string variable aboutMe that combines your name and age like "My name is Alex and I am 25 years old"*/
let age = 19 
let name = "Laura"
const aboutMe = "My name is " + name  + " and I am "+ age +" years old"
console.log(aboutMe)
//> My name is Laura and I am 19 years old
/* Create a constante variable PI and assign 3.14159 to it.*/
const PI = 3.14159
console.log(PI)
//> 3.14159
/* Log the result of dividing a number by zero*/
let num = 6
let div = 0
console.log(num/div)
//> infinity

//section 2
/*Given two numbers, log their sum, diference, product, and quotient*/
let n1 = 3;
let n2 = 8;
let sum = n1 + n2;
console.log(sum);
let diference = n1 - n2;
console.log(diference);
let product = n1 * n2;
console.log(product);
let quotient = n1 / n2;
console.log(quotient);

/*Use the modulo operator to fint the remainder of two numbers*/
let n3 = 4;
let n4 = 9;
let remainder = n3 % n4;
console.log(remainder);

/*Use the ** operator to raise a number to a power*/
let n5 = 3;
let power = n5 ** 2;
console.log(power);

/*Increment a number using both the ++ operator and the += operator*/
let n6 = 5;
n6++;
n6 +=1;
console.log(n6)

/*Decrement a nmber using both the -- operator and the -= operator*/
let n7 = 4;
n7--;
n7 -= 1;
console.log(n7);

//Section 3
/*Declare a string and its log legth*/
let string = "Hello";
const lgt = string.length;
console.log(lgt);
console.log(string.length);

/*Convert a string to uppercase*/
console.log(string.toUpperCase())

/*Check if a sting includes the word apple*/
let str = "apple, banana, mango";
console.log(str.includes("apple"));

/*Split a comma-separated string into an array*/
let str_arr= str.split(",");
console.log(str_arr);

/*Replace all instances of the "apple" with "orange" in a string*/
let new_str = str.replace("apple", "orange");
console.log(new_str);

//Section 4
/*Write a conditional that logs "positive" if a number is greater that 0*/
let nume = 9;
if (nume > 0){
    console.log("positive");
}

/*Expand the above to log "negative" for less than 0 and "zero"*/
let numi = -7
if (numi > 0){
    console.log("positive");
} else if (numi < 0){
    console.log("negative");
} else console.log("zero");

/*Check if a string leght is greater that 5. If yes, log "Long string", otherwise "Short string"*/
let str = "Good night";
if(str.length>5){
    console.log("Long string");
}else console.log("Short string");

/*Use a ternary operator to check if a number is odd or even.*/
//condition ? valueIfTrue : valueIfFalse
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);

//Section 5
/*Use a foor loop to log number 1 through 10*/
for(let i = 1; i <= 10; i++){
    console.log(i)
}

/*Use a while loop to log number 5 through 15*/
for(let i = 5; i <= 15; i++){
    console.log(i)
}

/*Log all even numbers between 1 and 20 using a loop*/
for (let i = 1; i <=20; i++){
    if (i % 2 == 0 ){
        console.log(i)
    }
}

/*Log the character of a string using a loop*/
let str = "Hello";
for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}

/*Use a loop to revese a string*/
let reversed = "";
for(let i = str.length-1; i >= 0; i--){
    reversed +=  str[i];
}console.log(reversed);