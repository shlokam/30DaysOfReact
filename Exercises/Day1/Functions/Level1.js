//1
function fullName(firstName, lastName){
    return(firstName + " " + lastName);
}

//2
function add(first, second){
    return(first + second);
}

//3
function areaOfCirlce(raduis){
    return (22/7 * raduis * raduis);
}

//4
function convertCelciusToFahrenheit(celcius){
    return ((celcius* (9/5)) + 32)
}

//5
function calculateBMI(weight, height){
    return weight/(height*height);
}

function BMI(bmi){
    
    if(bmi<=18.5)
        return("Underweight")
    else if(bmi>18.5 && bmi<24.9)
        return("Normal Weight")
    else if(bmi>25 && bmi<29.9)
        return("Over Weight")
    else if(bmi>30 )
        return("Obese")
}

