var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");



function calculatorMult(num1, num2) {
   var multSum = num1 * num2;
    
    return multSum;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function calculatorAdd(num1, num2) {
  
   var addSum = num1 + num2;
   
   return addSum;

}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function calculatorSub(num1,num2){
 
  var subSum = num1 - num2;
  
  return subSum;

}
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function calculatorDiv(num1, num2){
  
   var divSum = num1 / num2;
    
    return divSum;
}

function calculatorOpp(num1, num2, funOp){
   var finalValue =  funOp(num1, num2);
    console.log(finalValue);


}

var input1, input2;
//adding our eventlisteners to our button variables
addButton.addEventListener("click", function(){
 input1 = parseInt(document.getElementById("numOne").value);
 input2 = parseInt(document.getElementById("numTwo").value);
 calculatorOpp(input1, input2, calculatorAdd);
});

subtractButton.addEventListener("click", function(){
  input1 = parseInt(document.getElementById("numOne").value);
  input2 = parseInt(document.getElementById("numTwo").value);
calculatorOpp(input1, input2, calculatorSub);

});

divideButton.addEventListener("click", function(){
  input1 = parseInt(document.getElementById("numOne").value);
  input2 = parseInt(document.getElementById("numTwo").value);
calculatorOpp(input1, input2, calculatorDiv);
});

multiplyButton.addEventListener("click", function(){
  input1 = parseInt(document.getElementById("numOne").value);
  input2 = parseInt(document.getElementById("numTwo").value);
calculatorOpp(input1, input2, calculatorMult);
});







