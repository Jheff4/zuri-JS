let firstNum = prompt("Enter first number: ");
firstNum = parseInt(firstNum);

const operation = prompt("Enter operation [ '+'  '-'  '*'  '/' ]: ");

let secondNum = prompt("Enter second number: ");
secondNum = parseInt(secondNum);

let result;

if ( operation === '+' ) {
  add()
} else if ( operation === '-' ) {
  subtract()
} else if ( operation === '*' ) {
  multiply()
} else if ( operation === '/' ) {
  divide()
} else {
  error()
}

function add() {
  result = firstNum + secondNum
  return result
}

function subtract() {
  result = firstNum - secondNum
  return result
}

function multiply() {
  result = firstNum * secondNum
  return result
}

function divide() {
  result = firstNum / secondNum
  return result
}

function error() {
  result = "Enter a valid operation [ '+'  '-'  '*'  '/' ]";
  return result
}

window.confirm(result)