"use strict";
//task15 guest_List Remove and new guest
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_List = void 0;
let guest_List = ["Mohsin", "Amir", "Shazia", "Mehak Alamgir"];
exports.guest_List = guest_List;
for (let i = 0; i < guest_List.length; i++) {
    console.log("Recpected Sir/Madam " + guest_List[i] + ',\n\nWe invited you on dinner tomorrow.\nThank You\n');
}
let ab_Guest = "Mohsin";
let new_Guest = "Imran Khan";
for (let i = 0; i < guest_List.length; i++) {
    console.log("Recpected Sir/Madam" + guest_List[i] + ',\n\nWe invited you on dinner tomorrow.\nThank You\n');
}
console.log(`Mr. ${ab_Guest} Will not coming tomorrow dinner`);
