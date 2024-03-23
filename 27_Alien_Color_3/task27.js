"use strict";
// task27 trun your if else chain from ex no 25,26
let alienColor = "green";
//version 1
if (alienColor === "green") {
    console.log("Player earned 5 point.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
// version 2
alienColor = "yellow";
if (alienColor === "green") {
    console.log("Player earned 5 point.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
// version 3
alienColor = "red";
if (alienColor === "green") {
    console.log("Player earned 5 point.");
}
else if (alienColor === "yellow") {
    console.log("Player earned 10 points");
}
else if (alienColor === "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
