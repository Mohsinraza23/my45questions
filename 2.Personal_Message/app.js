//Personal message
var personName = '';
personName = prompt('What is your name?') || '';
if (personName !== null && personName !== '') {
    alert("Hello ".concat(personName, ", would u like to learn some Typescript today"));
}
else {
    alert('You have to fill your name !');
}
