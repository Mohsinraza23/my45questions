"use strict";
// task 42 Great Magicians,write a function called make_great() that modifies the array of magicians by
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magiciansArry) {
    for (let i = 0; i < magiciansArry.length; i++) {
        magicians[i] = 'the Great ' + magiciansArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
