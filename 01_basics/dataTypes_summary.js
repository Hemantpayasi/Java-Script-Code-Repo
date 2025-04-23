// Primitive
// 7 types :- String, Number, Boolean, null, Undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.7;
// ----> it will be number not float or int

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigInterger = 345678763443234565987n
console.log(typeof bigInterger);
console.log(bigInterger);



// Reference (Non Primitive)
// Array, Objects, Functions 

const heros = ["Saktiman", "naagraj", "doga"];

let myObj = {
    Name: "Hemant",
    Age: 20,
}

const myFunction = function(){
    console.log("Hello World");
    
}

// https://262.ecma-international.org/5.1/#sec-11.4.3