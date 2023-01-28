//1
let grade = 80;

if(grade>=90)
    console.log("Grade is A");

else if(grade>=70 && grade<=89)
    console.log("Grade is B");

else if(grade>=60 && grade<=69)
    console.log("Grade is C");

else if(grade>=50 && grade<=59)
    console.log("Grade is D");

else 
    console.log("Grade is F");

//2

let month = prompt('Enter month')

if(month=='September' ||month=='October' || month=='November' )
    console.log("Autumn");

else if(month=='December' ||month=='January' || month=='Febuary' )
    console.log("Winter");

else if(month=='March' ||month=='April' || month=='May' )
console.log("Spring");

else 
    console.log("Summer");

//3
let day = prompt("What is day today?")
if(day=='Saturday' ||month=='Sunday' )
    console.log(day + " is weekend");
else 
console.log(day + " is workding day");


