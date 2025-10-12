let name1, name2, name3, name4, name5;

name1 = "Anis";
name2 = "Lima";
name3 = "Shipa";
name4 = "Rinku";
name5 = "Tinku";

let names =  new Array(50);
names[0] = "Anis";
names[1] = "Lima";
names[2] = "Shipa";
names[3] = "Rinku";
names[4] = "Tinku";
console.log(names[0]);
console.log(names[4]);
console.log(names[2]);
console.log(names);
console.log(names.length);






let nam = ["ammar","bin","anwar","fuad"];

//library function
names.push("Ammar");
names.push("Bin");
names.pop();
console.log(names);

//concat array

let nam2 = ["ammar","bin","anwar","fuad"];

let fullname = nam.concat(nam2);
console.log(fullname);