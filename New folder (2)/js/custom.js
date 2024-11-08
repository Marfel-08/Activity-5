// FUNCTION TO DISPLAY NAME
function displayName(name){
    alert("Your Name is " + name);
    document.write("Your Name is " + name);
    console.log("Your Name is " + name);
}

function sumOfTwoNumbers(firstnumber, secondnumber){
    let c = firstnumber + secondnumber;
    document.write("The sum of 2 number is:" + c);
}
//COMPUTE TWO NUMBERS
function sumOfTwoNumbers(firstnumber, secondnumber, dynamicVariable){
    let c = firstnumber + secondnumber;
    document.getElementById(dynamicVariable).innerHTML = "The Sum is: " + c;
    //document.write("The sum of 2 numbers is: " + c);
}

function product(a,b,c){
    document.getElementsByClassName(c)[0].innerHTML = "The product is: " + (a*b);
}

function inputTwoNumbers() {
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));
        let sum = num1 + num2;
        alert("The sum of the two numbers is:" + sum);
    }

function InputGrade() {
    var name = prompt("Enter your name:");

    let totalItem = parseInt(prompt("Enter total item:"));
    let totalScore = parseInt(prompt("Enter total score:"));

    let compute = parseFloat((-4* (totalScore/ totalItem) +5). toFixed(2));
    var remarks = checkRemarks(compute);
    return "Hello" + name + ",Your grade is:" + compute +" And you are" + remarks;
    

}

function checkRemarks(){
   var remarks = (grade > 3.0) ? "Failed" : "Passed";
   document.write("<br><br>");
   return remarks;
}