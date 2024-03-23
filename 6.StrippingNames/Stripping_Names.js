//Stripping Names: Store a person name , and including some whitespace
//character at the beginning and end of the name
//Use"\t" (tab) and "\n" (new line)at least once. print the name onece
//so the whitespace around the name is displayed.then print the
//name after stripping the white spaces.
var Stripping_Names = "\t\n Mohsin \t\n"; //save name with whitespace
console.log("Name with spaces: ".concat(Stripping_Names)); //before the whitesspace
console.log("Stripped Name: ".concat(Stripping_Names.trim())); //after
