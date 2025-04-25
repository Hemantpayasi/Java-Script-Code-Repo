const name = "Hemant";
const repo = 100;

// console.log(name + repo + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('Hemant-payasi-com')
// console.log(typeof gameName)

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf('H'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "      Hemant.     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Hemant.com/hemant%20pay%20si"
console.log(url.replaceAll('%20', '-'));

console.log(url.includes('hemant'))

console.log(gameName.split('-'))
