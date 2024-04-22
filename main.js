"use strict";
let guestList = ["ahmed", "alisha", "basim", "ibrahim"];
let dontCome = guestList[0];
console.log(dontCome, "Nai Ahh skta");
guestList.splice(0, 1, "tariq");
guestList.forEach(guest => console.log(`Salam ${guest},Would like to Dinner with me?`));
