"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = [`Shahid`, `Raza`, `Rafay`, `Maroof`, `Hamza`];
// for (let i = 0; i < guest_list.length; i++) {
//     console.log(`Respeted Sir/Madam ` + guest_list [i] + `, \n We invitedd you on dinner tomorrow. \n\n Thanks you`)
// }
let not_present = `Raza`;
let new_guest = `Azam Khan`;
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respeted Sir/Madam ` + guest_list[i] + `, \n We invitedd you on dinner tomorrow. \n\n Thanks you`);
}
guest_list.unshift(`shaheen`, `sarfaraz`, `rizwan`);
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respeted Sir/Madam ` + guest_list[i] + `, \n We invitedd you on dinner tomorrow.we found big table so we decide to invited 3 more guest \n Thanks you\n`);
}
