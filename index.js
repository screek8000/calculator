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
const operate = () =>{

  if (operator=='+'){
    sum()
    
  }
 else if (operator=='-'){
    substract()
  }
 else if (operator=='/'){
    divide()
  }
 else if (operator=='*'){
    multiply()
  }
  firstNumber=results;
  display.textContent=results;
  
  
}
clear.addEventListener('click', function () {
  firstNumber=undefined;
  secondNumber=undefined;
  operator=undefined;
  operatorClicked=false
  !operate()
   display.textContent=""
})

getElement.forEach(function (element) {
  element.addEventListener('click', function(){
    if(!operatorClicked){
      display.textContent += parseInt(element.textContent)
      firstNumber = Number(display.textContent)
    }else if(operatorClicked){
      display.textContent += parseInt(element.textContent)
      secondNumber =Number(display.textContent)
    } else{
      secondNumber= undefined;
      firstNumber=undefined;
    }
   
    
  })
  
})

operators.forEach((ops)=>{
  ops.addEventListener('click',()=>{
    display.textContent="";
    operator=ops.textContent;
    operatorClicked= true
  })
  operate()
})