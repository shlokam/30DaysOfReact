//1 
function userIdGeneratedByUser(){
    let len = prompt('Enter length')
    let amt = prompt('Enter number of ids')

    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz'
    let result = ''
    while(amt--){
        result = ''
        for(let i =0;i<len;++i){
            result+=chars.charAt(Math.random() * chars.length)
        }

        console.log(result);
    }
}

userIdGeneratedByUser()

//2
function generateColors(color,num){

    if(color=='hexa'){

        chars='0123456789abcdef'
        let result = ''
        while(num--){
        result = '#'
        for(let i =0;i<6;++i){
            result+=chars.charAt(Math.random() * 16)
        }

        console.log(result);
    }
    }
    else{
        let arr=[]

        while(num--){
            arr=[]
            for(let i=0;i<3;++i)
                arr.push(Math.floor(Math.random()*256));
            console.log(arr);
        }
    }
}

generateColors('hexa',3)
generateColors('rgb',3)

//3
function shuffleArray(arr){

    for(let i=arr.length-1;i>0;i--){

        var j = Math.floor(Math.random()* (i+1))

        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    console.log(arr);
}

shuffleArray([1,2,3,4,5,6])

//4
function factorial(num){

    let fact=1;

    for(let i=2;i<=num;++i)
        fact *=i
    
        console.log(fact);
}
factorial(5)

//5
function isEmpty(arr){
    if(arr.length==0)
        console.log("Empty");
    else 
        console.log("Not empty");
}

isEmpty([])

//6
function average(arr){

    let avg=0;

    for(let i in arr){

        if(typeof arr[i]!='number'){
            console.log("array contains Nan");
            return;
        }

        avg = avg + arr[i];

    }
    avg = avg/arr.length

    console.log("Average " + avg);
}

average([1,2,3])
average([1,2,'3'])
