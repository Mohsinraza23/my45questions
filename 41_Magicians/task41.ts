//task 41
//show_magicians(), which prints the name of each magicians in array

let magicians : string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley','Albus Dumbledore'];

function show_magicians(magicians: string[]){
magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians(magicians)