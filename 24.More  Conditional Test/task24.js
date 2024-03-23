"use strict";
// task 24 more conditional tests
let car = "subaru";
let age = 25;
let numbers = [1, 2, 3, 4,];
// Test 1 Equakity (false)
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == 'subaru'); // True (case insensitive)
//  Test 2 Strict equality
console.log("Is car === 'subaru' ? I predict False.");
console.log(car === 'subaru'); // false (case insensitive)
//  3rd test  Inequality
console.log("Is car != 'Toyota'? I predict true.");
console.log(car != 'toyota'); //true
// test 4 inequality (false)
console.log("Is car !== 'subaru' ? I predict false.");
console.log(car !== 'subaru'); //false
//test 5 Lowercase function
console.log("Is car.LowerCase() == 'subaru' ? I predict True.");
console.log(car.toLocaleLowerCase() == 'subaru'); //true loweCase
// test 6
console.log("Is car === car.LowerCase() ? I predict false.");
console.log(car === car.toLocaleLowerCase()); //false upperCase
//  Numerical tests
//  7 Equality (true)
console.log("Is age == 25 ? I predict true");
console.log(age == 25); //true
//  test 8 inequality false
console.log("Is age != 25 ? I predict false");
console.log(age != 25); //false
// test 9 Greater than (false)
console.log("Is age > 30 ? I predict");
console.log(age > 30); //false
// test 10 Les than or equal (true)
console.log("Is age <= 25 ? I predict True");
console.log(age <= 25); //true
