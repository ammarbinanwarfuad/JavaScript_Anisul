// iifes = Immediately Invokeable Function Expressions



(function display() {
    console.log("Hello");
})(); //iifes

// display();

//task-7: create an IIFES that print sum of two numbers 
(function sum(num1,num2) {
    let sum = num1+num2;
    // return sum;
    console.log("Sum = "+sum);
})(5,6);




//Function Expressions 
//(),{},[],<>
function displayMessage(){
    console.log("Hi i am a messenger");
}

displayMessage();


const display2 = function displayMessage1(){
    console.log("Again Hi with function expression");
};

display2();


const display3 = function displayMessage3(msg){
    console.log(msg);
};

display3("I am a parameter");