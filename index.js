let firstNumber;
let display = document.querySelector('.display')
let clear = document.querySelector('#clear')
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
const operate = () =>{
  if (operator=='+'){
    sum()
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
console.log(firstNumber);