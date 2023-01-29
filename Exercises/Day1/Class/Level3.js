class Statistics{

    constructor(arr){
        this.arr=arr;
    }

    count(){
        let ct=0;
        for(let i in this.arr)
            ct+=this.arr[i];
        return(ct); 
    }

    min(){
        let min=this.arr[0];
        for(let i in this.arr){
            if(min>this.arr[i])
                min=this.arr[i]
        }
        return(min); 
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages);

console.log('Count:', statistics.count())
console.log('Min: ', statistics.min()) 