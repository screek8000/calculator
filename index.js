let firstNumber;
let display = document.querySelector('.display')
display.textContent="";

let clear = document.querySelector('#clear')
let operators = document.querySelectorAll('.operator')
let operator;
let results;
let secondNumber;
let getElement = document.querySelectorAll('#click')
let operatorClicked = false;

const sum = ()=>{
  results = Number(firstNumber + secondNumber); 
  return firstNumber + secondNumber;
  
}
const substract = ()=>{

  results =  Number(firstNumber - secondNumber);
  return firstNumber - secondNumber;

}
const divide = ()=>{
  results = Number(firstNumber / secondNumber);
  return firstNumber / secondNumber;
}
const multiply = ()=>{
  results = Number(firstNumber * secondNumber);
  return firstNumber * secondNumber;
}
const operate = () => {
  if (firstNumber !== undefined && secondNumber !== undefined) {
    if (operator == '+') {
      results = sum();
    } else if (operator == '-') {
      results = substract();
    } else if (operator == '/') {
      results = divide();
    } else if (operator == '*') {
      results = multiply();
    }
    firstNumber = results;
    display.textContent = results;
    operator=undefined
  }
}

operators.forEach((ops) => {
  ops.addEventListener('click', () => {
    if (firstNumber !== undefined) {
      if (secondNumber !== undefined) {
        operate();
        firstNumber=results;
        secondNumber = undefined;
      }
      display.textContent = results;
      operator = ops.textContent;
      operatorClicked = true;
    }
  })
})

clear.addEventListener('click', function () {
  firstNumber=undefined;
  secondNumber=undefined;
  operator=undefined;
  operatorClicked=false
  results= undefined;
  !operate()
   display.textContent=""
})

getElement.forEach(function (element) {
  element.addEventListener('click', function(){
    if(!operatorClicked){
      if (display.textContent.includes('.') && element.textContent === '.') {
        return;
      }
      display.textContent += element.textContent;
      firstNumber = parseFloat(display.textContent);
    } else if(operatorClicked){
      if (display.textContent.includes('.') && element.textContent === '.') {
        return;
      }
      display.textContent = element.textContent;
      secondNumber = parseFloat(display.textContent);
      operatorClicked = false;
    } else if(results !== undefined && secondNumber !==undefined){
      display.textContent = "FUCK YOU"     
    } else{
      secondNumber= undefined;
      firstNumber=undefined;
    }
  })  
})
