"use strict";
// task 43 unchange magicians ,Call the function 
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArry(arr) {
    return [...arr];
}
function make_great(magiciansArry) {
    for (let i = 0; i < magiciansArry.length; i++) {
        magiciansArry[i] = 'the Great ' + magiciansArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArry = copyArry(magicians);
make_great(copyMagicianArry);
console.log('\n\nThis is my orginal Arry:');
show_magicians(magicians);
console.log('\n\nThis is my modified copy of the Arry:');
show_magicians(copyMagicianArry);