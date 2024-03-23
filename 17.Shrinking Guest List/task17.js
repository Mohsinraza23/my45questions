"use strict";
//task 17 shrining guest list
let guest_List = ["Mohsin", "Amir", "Ali", "Shazia"];
// for(let i=0; i<guest_List.length; i++){
//     console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
// }
let not_Present = "Mohsin";
let new_Guest = "Hider";
guest_List[0] = new_Guest;
// for(let i=0; i<guest_List.length; i++){
//     console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
// }
guest_List.unshift("Ahsan", "Hassan", "Kamran");
// for(let i=0; i<guest_List.length; i++){
//     console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
// }
console.log("\nUnfortunately we can not big table , only two people allow.");
while (guest_List.length > 2) {
    let remove_Guest = guest_List.pop();
    console.log(`Sorry Sir, ${remove_Guest} you are not invited for dinner.`);
    for (let i = 0; i < guest_List.length; i++) {
        console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n Yes you are still invited tomrrow.\n\n Thank you\n");
    }
}
guest_List.splice(0, 2);
console.log(guest_List);
