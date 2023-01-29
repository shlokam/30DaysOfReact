const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//1
let max=0;

for (const [key, value] of Object.entries(users)) {
    if(value.skills.length>max) 
        max=value.skills.length
}

console.log("Maximum skils: " + max);


//2
let ctLoggedIn=0,ctGreaterThan50Points=0;
for (const [key, value] of Object.entries(users)) {
    if(value.isLoggedIn) 
        ++ctLoggedIn;
    if(value.points>=50)
        ++ctGreaterThan50Points;
}

console.log("Logged In Users: "+ ctLoggedIn);
console.log("Greater Than 50: "+ ctGreaterThan50Points);

//3
console.log("People who are MERN developer");
for (const [key, value] of Object.entries(users)) {
    if(value.skills.includes('MongoDB') && value.skills.includes('Express') && value.skills.includes('React') && value.skills.includes('Node')) 
        console.log(key);
}

//4
const user = {
    email: 'xyz@xyz.com',
    skills: ['HTML', 'JavaScript', 'React'],
    age: 40,
    isLoggedIn: false,
    points: 60
  }

  users['XYZ']= user

console.log(users);

//5
for (const [key, value] of Object.entries(users)) {
    console.log(key);
}

//6
for (const [key, value] of Object.entries(users)) {
    console.log(value);
}