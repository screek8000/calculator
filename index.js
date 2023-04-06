let firstNumber;
let display = document.querySelector('.display')
let clear = document.querySelector('#clear')
let operator;
let secondNumber;
let getNum = document.querySelector('.btn')
firstNumber = parseInt(getNum.textContent) 
secondNumber = parseInt(getNum.textContent) 
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