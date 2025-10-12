

let num = new Array();

for(let i = 0; i<=5; i++){
    num[i]= parseInt(prompt("Enter the "+i+" elements : "));
}

let sum = 0;

for (i = 0; i< num.length; i++){
    console.log(num[i]);
    sum = sum + num[i];
}
console.log("Sum  = "+sum);