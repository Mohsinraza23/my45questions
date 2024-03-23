//task 28 stages of life set a value for  variable age and then

let age: number = 25;

//if the person is less than 2 years old print a message that the person is a baby

if(age < 2){
    console.log("person is a baby.")
}
//if the person is at least 2 years old but less thab 4 print a messag that the person is a toddler

else if(age >= 2 && age < 4){
    console.log("person is a toddler.")
}
else if(age > 4 && age < 13){
    console.log("person is a kid");
}
else if(age >= 13 && age < 20){
    console.log("person is a teenager");
}
else if(age >= 20 && age < 65){
    console.log("person is an adult");
}
else{
    console.log("person is an elder");
}