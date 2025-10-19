// EX 1
const my_name = "Laura";
let my_age = 19;
const age_promp = my_age + " years old";
console.log("My name is " + my_name + " and I am " + age_promp);
//EX 2 
function CheckNumber (number){
if ( number < 0){
    console.log("The number is negative");
} else if (number > 0){
    console.log("The number is positive");
} else{
    console.log("The number is 0");
}
}
CheckNumber(5)

//EX 3
const i = 1;
while (i <= 5){
    console.log(i);
    i++;
}

//EX 4 
let sum = 0;
for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

//EX 5
for (let i =  1; i <= 10; i++){
    if (i == 7) break;
    console.log(i);
}


