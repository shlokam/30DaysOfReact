//1
const arr = []

//2
const arrMoreThan5 = [1,2,3,4,5,6,7]

//3
console.log("Length of Empty array " + arr.length);
console.log("Length of More than 5 " + arrMoreThan5.length);

//4
console.log("First item: " + arrMoreThan5[0]);
console.log("Middle item: " + arrMoreThan5[ Math.floor(arrMoreThan5.length/2)]);
console.log("Last Item: "+ arrMoreThan5[arrMoreThan5.length -1]);

//5
const mixedDataTypes= [1,"2",3.0,"4",5,"6"];
console.log("Mixed Data type Length " + mixedDataTypes.length);

//6
const itCompanies = ["Facebook" , "Google", "Microsoft","Apple", "IBM" ,"Oracle" , "Amazon"];

//7
console.log("IT companies: " + itCompanies);

//8
console.log("Number of comapanies " + itCompanies.length);

//9
console.log("First Company: " + itCompanies[0]);
console.log("Middle Company: " + itCompanies[ Math.floor(itCompanies.length/2)]);
console.log("Last Company: "+ itCompanies[itCompanies.length -1]);

//10
console.log("All IT Companies");
for(let i in itCompanies)
    console.log(itCompanies[i]);

//11
console.log("All IT Companies in uppercase");
for(let i in itCompanies){
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}

//12
var str;
str = itCompanies.join(',') + ' '
str = str + "are big it companies";
console.log(str);

//13
console.log("Is IBM in IT Companies ? " + itCompanies.includes("IBM"))
console.log("Is XYZ in IT Companies ? " + itCompanies.includes("XYZ"))

//14
console.log("Companis with more than 1 O");
for(let i in itCompanies){
    var str = itCompanies[i];
    var ct=0;
    for(j in str){
        if(str[j]=='O')
            ++ct;
    }

    if(ct>1)
        console.log(itCompanies[i]);
}

//15
itCompanies.sort();
console.log("Sorted IT Comapnies: " + itCompanies)

//16
itCompanies.reverse();
console.log("Reversed IT Comapnies: " + itCompanies)

//17
console.log("Slicing first 3 : " + itCompanies.slice(0,3));
console.log("Slicing last 3 : " + itCompanies.slice(itCompanies.length-3,itCompanies.length));
console.log("Slicing Middle: " + itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+1));

//18
console.log("First item removed " + itCompanies.splice(0,1));
console.log("Middle item removed " + itCompanies.splice(Math.floor(itCompanies.length/2),1));
console.log("Last item removed " + itCompanies.splice(itCompanies.length-1,1));
console.log("All item removed " + itCompanies.splice());




