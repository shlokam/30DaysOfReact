function getPersonInfo(obj){
    
    const {firstName,lastName,age,country,job,skills,languages} = obj

    console.log(firstName + " " + lastName + " lives in " + country + ".He is " + age + " years old. He is a " +job +" .He teaches ");

    for(let i in skills)
        console.log(skills[i]+ ",");
    
    console.log("He speakes ");

    for(let i in languages)
        console.log(languages[i]+ ",");
    
}

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }

  getPersonInfo(person)