const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();
console.log(ages);

var min = ages[0];
var max = ages[ages.length-1]
console.log("Max: " + max);
console.log("Min: " + min);

var median;
var len = ages.length

if(len%2==0)
    console.log(ages[len/2]);
else{
    median = ages[Math.floor(len/2)] + ages[Math.floor(len/2) +1]
    console.log(median/2);
}

var avg=0.0;

for(let i in ages)
    avg = avg + ages[i];

avg = avg/ages.length;
console.log("Average: " + avg);

console.log("Range: " + (max-min))

console.log("Compare min: " + Math.abs(min-avg));
console.log("Compare max: " + Math.abs(max-avg));

import {country} from "./countries.js"

country.slice(0,10);

var mid = Math.floor(country.length/2);
console.log(country[mid]);

const firstHalf=[]
const secondHalf=[]

var len = country.length

firstHalf = country.slice(0,len/2);
secondHalf = country(len/2,len);


