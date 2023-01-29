const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

//1
products.forEach((product,i)=> console.log(product.product + " " + product.price));

//2
products.forEach((product,i)=> console.log("The price of " + product.product + " is " + product.price));

//3
let sum=0;
for(const{product,price} of products){
    if(typeof price=='number')
        sum+=price
}
console.log(sum);

//4
const prices=[];
function callback(item,i){

    prices.push(item.price)
}

products.map(callback)

console.log(prices);

//5
function call(item){
    if(item.price>=3)
        return true;
    return false;
}


const filteredArray = products.filter(call)
console.log(filteredArray);

//6
const add =prices.reduce((acc,curr)=>acc+curr)
console.log(add);

//7
const add1 =prices.reduce((acc,curr)=>acc+curr)
console.log(add1);

//8
function fcall(item){
    if(typeof item.price=='number')
        return false;
    return true;
}

const filteredArr = products.filter(fcall)
console.log(filteredArr);




