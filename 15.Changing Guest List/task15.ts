// task 15..... changeing Guest List

let guest_List : string [] = ["Mohsin", "Amir", "Ali", "Shazia"];
for(let i=0; i<guest_List.length; i++){
    console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
}
let not_Present : string = "Mohsin";
let new_Guest : string = "Hider";
guest_List[0] = new_Guest;
for(let i=0; i<guest_List.length; i++){
    console.log("Respected Sir / Madam " + guest_List[i] + ", \n\n invited you on dinner tomarrow.\n\n Thank you\n");
}
console.log(`Mr. ${not_Present} will not coming tomarrow dinner`);



