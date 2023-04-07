let firstNumber;
let display = document.querySelector('.display')
let clear = document.querySelector('#clear')
let operators = document.querySelectorAll('.operator')
let operator;
let secondNumber;
let getElement = document.querySelectorAll('#click')
firstNumber = parseInt(getElement.textContent) 
secondNumber = parseInt(getElement.textContent) 

const sum = ()=>{
  return firstNumber + secondNumber;
}
const substract = ()=>{
  return firstNumber - secondNumber;
}
const divide = ()=>{
  return firstNumber / secondNumber;
}
const multiply = ()=>{
  return firstNumber * secondNumber
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
  
}
clear.addEventListener('click', function () {
   display.textContent=""
})

getElement.forEach(function (element) {
  element.addEventListener('click', function(){
    display.textContent += parseInt(element.textContent)
    firstNumber = display.textContent
    
  })
  
})

operators.forEach(function (op) {
  op.addEventListener('click', ()=>{
    operator=op.textContent
    console.log(operator);
  })

})
