"use strict";
//task 16 more Guest
let guest_List = ["Mohsin", "Amir", "Ali", "Shazia"];
// for(let i=0; i<guest_List.length; i++){
//     console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
// }
let not_Present = "Mohsin";
let new_Guest = "Hider";
guest_List[0] = new_Guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
}
guest_List.unshift("Ahsan", "Hassan", "Kamran");
for (let i = 0; i < guest_List.length; i++) {
    console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
}
