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
    secondNumber = undefined;
  }
}

operators.forEach((ops) => {
  ops.addEventListener('click', () => {
    if (firstNumber !== undefined) {
      if (secondNumber !== undefined) {
        operate();
        firstNumber=results;
       
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
      display.textContent += parseFloat(element.textContent)
      firstNumber = parseFloat(display.textContent)
    }else if(operatorClicked){
      display.textContent += parseFloat(element.textContent)
      secondNumber =parseFloat(display.textContent)
    } else{
      secondNumber= undefined;
      firstNumber=undefined;
    }
   
    
  })
  
})

