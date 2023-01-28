//1
let age = prompt('Enter age')

if(age>=18)
    console.log("Old enough to drive");

else 
    console.log("Wait "+ (18-age) + " years to drive");

//2
let myAge = 50
let yourAge= age 

if(yourAge>myAge)
    console.log("You are " + (yourAge-myAge) + "older");

else 
console.log("You are " + (myAge-yourAge) + " younger");
    
//3
let a = 4
let b = 3

a>b ? console.log("a is greater"):console.log("b is greater")

//4
let num = prompt("Enter number")

if(num%2==0)
    console.log(num + "is even");
else 
    console.log(num + "is odd");


