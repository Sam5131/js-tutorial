// Primitive

// String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const valule = 100.3
const isLog = false
const outtemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 123456789012301234567890n

// Reference or Non Primitive
// Array, Objects, Functions

const heros = ['a','b','c']

let myObj = {
    name: "Syamantak",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}

// typeof of null is object
//typeof of function is function but called as object function