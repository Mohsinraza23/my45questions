//task15 guest_List Remove and new guest

let guest_List : string [] = ["Mohsin", "Amir", "Shazia", "Mehak Alamgir"];
for(let i=0; i<guest_List.length; i++){
    console.log("Recpected Sir/Madam "  + guest_List[i] + ',\n\nWe invited you on dinner tomorrow.\nThank You\n');
}
let ab_Guest : string = "Mohsin";
let new_Guest : string = "Imran Khan";
for(let i=0; i<guest_List.length; i++){
    console.log("Recpected Sir/Madam" + guest_List[i] + ',\n\nWe invited you on dinner tomorrow.\nThank You\n');
}
console.log(`Mr. ${ab_Guest} Will not coming tomorrow dinner`);
export{guest_List}
