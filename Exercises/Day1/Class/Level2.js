//1
class Animal{
    constructor(name,age,color,legs){
        this.name=name;
        this.age=age;
        this.color=color;
        this.legs=legs;
    }

    getDetails() {
        console.log(this.name + " " + this.age + " " + this.color + " " + this.legs);    
    }

}
//2
class Dog extends Animal{
    inDog(){
        console.log("Inside Dog");
    }
    getDetails(){
        this.inDog();
        console.log(this.name + " " + this.age + " " + this.color + " " + this.legs);    

    }
}


const dog = new Dog("Dog",3,"brown",4)
dog.getDetails()
