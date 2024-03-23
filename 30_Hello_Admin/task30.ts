// task 30 make a array of five or more username,

const userName : string[] = ["admin", "bugs", "daffy", "twety", "jeck"];
for(let i=0; i<userName.length; i++){
    if(userName[i] === "admin"){
        console.log("Hello admin, would like see status repot");
    }
    else(
        console.log(`Hello ${userName[i]}, thank you for loggin in again`)
    )
}