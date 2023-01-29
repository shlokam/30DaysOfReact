//1
function solveQuadEquation(a,b,c){

    let d = b*b - 4*a*c;

    let root1 = (-b + Math.sqrt(d))/(2*a)
    let root2 = (-b - Math.sqrt(d))/(2*a)

    console.log(root1 + " " + root2);
}

solveQuadEquation(1,-1,-2)

//2
function printArr(arr){
    console.log(arr);
}
printArr(['A','B','C'])

//3
function showDateTimne(){
    const date = new Date();
    console.log(date)
}
showDateTimne()

//4
function swapValues(obj){
    let temp = obj.a
    obj.a = obj.b 
    obj.b = temp
}

let obj={
    a:10,
    b:20
}

swapValues(obj)

//5
function reverseArray(arr){

    let i =0, j= arr.length -1;

    while(i<j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        ++i;
        --j;
    }
    
}

const arr = [1, 2, 3, 4, 5]
reverseArray(arr)
console.log(arr);

//6
function capitalizeArray(arr){

    for(let i in arr){
        arr[i] = arr[i].toUpperCase();
    }
}

const cap = ['a','b','c'];
capitalizeArray(cap);
console.log(cap);

///7
function addItem(item,arr){
    arr.push(item);
    return arr;
}

addItem(6,arr)
console.log(arr);

//8
function removeItem(item,arr){
    let ind = arr.indexOf(item)
    arr.splice(ind,1);
    return arr;
}

removeItem(6,arr)
console.log(arr);

//9
function evenAndOdds(num){
    let evenCt=0,oddCt=0;

    for(let i =2;i<=num;++i ){
        if(i%2==0)
            ++evenCt;
        else 
            ++oddCt;
    }
    console.log("Even " + evenCt);
    console.log("Odd " + oddCt);
}

evenAndOdds(100)

//10
function add(){
    var sum=0;

    for(let i in arguments)
        sum+=arguments[i]

    return(sum)
}

console.log(add(3,4,7));

//11
function userIdGenerator(){

    var result =''
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    for(let i =0; i<7;++i){
        result+= chars.charAt(Math.floor(Math.random() * chars.length));
    }

    console.log(result);

}

userIdGenerator()
