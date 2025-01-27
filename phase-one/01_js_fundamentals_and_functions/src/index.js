//✅ Data Types 
// 7 primitives (is not an object and has no methods or properties) 
// Numbers, Strings, Booleans, Undefined, Null, Symbol, BigInt
// 1.0
// 1
// "hello hi"
// 'hello i am a string'
// `this also creates a string`
// true
// false
// undefined
// null

// Objects
// {
//   key: 'value',
//   anotherKey: 'another value'
// }

// [1,2,3,4,"hello"]

//✅ Variables
// const - constant, can't be changed
// let - can be changed
// var - can be changed, has weird scoping, stick to let and const

const personName = 'Emiley'

let anotherName
anotherName = 'Apollo'
anotherName = 'Daisy'

// var someVariable = 'hi'
// console.log(someVariable)

// someVariable = 'hello'
// console.log(someVariable)

//✅ Equality Operators
// === == != !==
// console.log(5 != "5")

//✅ Comparison Operators
// <, <=, > , >=
// console.log(5 <= 10)

//✅ Logical Operators
// &&, ||, !, !!
/*
  falsy values in JS:
  0
  ""
  undefined
  null
  NaN
*/
// console.log(!!undefined)
// console.log(!!"")

// + - / * ** (PEMDAS)
// Parenthesis
// Exponents
// multiplication and division
// addition and subtraction
// console.log((10 + 5) / 5 * 10 + 2 ** 5)
// 2**5

//✅ control flow
// if ('') {
//   console.log('truthy')
// } else {
//   console.log('falsey')
// }

// if ('') {
//   console.log('the condition was true')
// } else {
//   console.log('otherwise do this, aka the condition was false')
// }

let temp = 49

if (temp >= 70) {
  console.log('go for a walk')
  console.log(temp)
  let blockScope = 'block scope'
} else if (70 > temp && temp >= 50) {
  console.log('bundle up')
  console.log('go for a walk')
  let elseIf = 'else if variable'
} else {
  console.log('stay inside')
}

// console.log(blockScope)

// camelCase - JS
// snake_case - Python
// PascalCase - Python, React components

// ✅ functions

//✅ create function helloWorld() that console logs "hello, world!"
function helloWorld() {

  console.log("hello, world!")
}

// helloWorld()

//✅ create function addNums that calculates and returns the sum of two numbers
// parameters - placeholders or special variables in the function definition
function addNums(num1, num2) {
  let sum = num1 + num2
  console.log(sum, "line 108")
  return sum
}
// let evaluation = addNums(2,5)
// console.log(evaluation, 'line 113')
// arguments - actual values that the parameters get assigned to
const addNumsAsArrowFunction = (num1, num2) => {
  let sum = num1 + num2
  return sum
}
let evaluation = addNumsAsArrowFunction(2,5)

//✅ Global Scope

//✅ Function Scope

//✅ Block Scope

//✅ BONUS: higher-order functions
