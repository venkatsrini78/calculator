


var input = document.getElementById('input'), 
  number = document.querySelectorAll('.numbers div'), 
  operator = document.querySelectorAll('.operators div'), 
  result = document.getElementById('result'),
    clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; 
for(i=0;i<number.length;i++)
 number[i].addEventListener("click",function(e){
  var first=input.innerHTML;
  var last=first[first.length-1];
  
  input.innerHTML+=e.target.innerHTML;
  if(resultDisplayed===true)
  {
    input.innerHTML="";
    input.innerHTML+=e.target.innerHTML;
    resultDisplayed=false;
  }
  
  

 });
 for(var i=0;i<operator.length;i++)
 {
  operator[i].addEventListener("click",function(e){
    var currentString = input.innerHTML;
  
    var lastChar = currentString[currentString.length - 1];
    
  
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "/") {
      var newString = currentString.substring(0, currentString.length-1);
      input.innerHTML = newString;
    }
  
    // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
    // first we replace all the numbers and dot with empty string and then split
    
    
    input.innerHTML+=e.target.innerHTML;
  })
 }
 result.addEventListener("click", function() {

  // this is the string that we will be processing eg. -10+26+33-56*34/23
  var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\//g);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");
  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");
{
  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output
  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  var multiply = operators.indexOf("×");
 
  }
  var divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
    
  }var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) +parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  
}var sub = operators.indexOf("-");
while (sub != -1) {
  numbers.splice(sub, 2, parseFloat(numbers[sub]) - parseFloat(numbers[sub + 1]));
  operators.splice(sub, 1);
  sub = operators.indexOf("-");
}
input.innerHTML=numbers;
resultDisplayed=true;
}
});
clear.addEventListener("click",function(e){
input.innerHTML="";
})