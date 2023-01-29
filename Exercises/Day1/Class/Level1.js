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

const animal = new Animal("XYZ",2,"black",4);
animal.getDetails()

//2
class Dog extends Animal{
    inDog(){
        console.log("Inside Dog");
    }
}

class Cat extends Animal{
    inCat(){
        console.log("Inside Cat");
    }
}

const dog = new Dog("Dog",3,"brown",4)
const cat = new Cat("Cat",1,"white",4)
dog.inDog();
cat.inCat()
