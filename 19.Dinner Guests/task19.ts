// task19 Dinner Guests

let guest_List : string [] = ["Mohsin", "Amir", "Ali", "Shazia"];
// for(let i=0; i<guest_List.length; i++){
//     console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
// }
let not_Present : string = "Mohsin";
let new_Guest : string = "Hider";
guest_List[0] = new_Guest;
// for(let i=0; i<guest_List.length; i++){
//     console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
// }
guest_List.unshift("Ahsan", "Hassan", "Kamran");
// for(let i=0; i<guest_List.length; i++){
//     console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
// }
// console.log("\nUnfortunately we can not big table , only two people allow.");
while(guest_List.length>2){
    let remove_Guest = guest_List.pop();
    
    //  for(let i=0; i<guest_List.length; i++){
    //  console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n Yes you are still invited tomrrow.\n\n Thank you\n");
}

guest_List.splice(0,2);
console.log(guest_List);

console.log(`Total num of guest are: ${guest_List.length}`);
