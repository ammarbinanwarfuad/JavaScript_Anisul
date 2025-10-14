const data = require("./02_2_studentsData.json");
//console.log(data);

//accessing data
//console.log(data.students[0].name);
console.log(data.students[0].friends[0].Age);

//modify data
data.students[0].name = "Ammar Bin Anwar Fuad"
//console.log(data.students[0].name);

//delete data
//delete data.students[0].name;
//console.log(data);