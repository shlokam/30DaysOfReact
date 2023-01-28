// //1
import {country} from "./countries.js"
import {webTech} from "./web_tech.js"

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

//3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
if(shoppingCart.includes('Honey')){
    var ind = shoppingCart.indexOf('Honey');
    shoppingCart.splice(ind,1);
}
var ind = shoppingCart.indexOf('Tea');
shoppingCart[ind] = 'Green Tea'
console.log(shoppingCart);

//4
if(country.includes['Ethiopia'])
    console.log('Ethopia');
else 
    country.push('Ethopia');

//5
if(web_tech.includes['Saas'])
    console.log('Saas is a CSS preprocess');
else 
    web_tech.push('Saas');
console.log(web_tech);

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
