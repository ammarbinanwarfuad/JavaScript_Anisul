// let base = prompt("Enter Base = ");
// let height = prompt("Enter Height = ");

let farenheight = parseFloat(prompt("Enter Farenheight = "));



let celsius = (farenheight-32)*(5/9);

document.write("Celsius = "+celsius);


celsius = parseFloat(prompt("Enter Celsius = "));

farenheight = (celsius*(9/5))+32;

document.write("Farenheight = "+farenheight);