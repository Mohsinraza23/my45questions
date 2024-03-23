//task31
// add an if test to exercise 28 to make sure the list of uaers is not empty.

let userName: string[] = ["Asif",'Zahid', "Amir","Hider", "Hassan"];

if(userName.length === 0){
    console.log("We need to find some users")
}else{
    userName = [];
    console.log("All user name have been removed. " + userName.length);
}