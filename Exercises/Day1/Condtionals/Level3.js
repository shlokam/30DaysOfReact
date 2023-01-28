let month = prompt("Enter month")
let year = prompt("Enter year")

if(month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December")
        console.log("Number of days is 31");
    else if((month == "February") && ((year%400==0) || (year%4==0 && year%100!=0)))	
    {

        console.log("Number of days is 29");
    }
    else if(month == "Febuary")
    {
        console.log("Number of days is 28");
    }	
    else
    console.log("Number of days is 30");