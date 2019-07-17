// alert("Hello")

//var,let constant

let age = 30;
age = 31;
console.log(age);

const age2 = 45;
console.log(age2);


const name = 'shivani'
let age3 = 30
age3 = age3 + 10
let rating = 4.5
rating = rating - 1.5

const isVal = true
const x = null
const y = undefined
let z

console.log(typeof name)
console.log(typeof age3)
console.log(typeof rating)
console.log(typeof isVal)
console.log(typeof x)
console.log(typeof y)

console.log(age3)
console.log(rating)



let nameTemp = 'shivani'

console.log('My name is' + nameTemp + 'Sethi!')
console.log(`My name is ${nameTemp} Sethi`)
console.log(nameTemp.length)
console.log(nameTemp.toUpperCase())
console.log(nameTemp.toLocaleUpperCase())
console.log(nameTemp.toLocaleLowerCase())
console.log(nameTemp.toLowerCase())
console.log(nameTemp.substring(2,5).toLowerCase())
console.log(nameTemp.split(''))
console.log(nameTemp.split("+"))


/// Arrays

const numbers = new Array(1,2,3,4,5,6)
console.log(numbers)

const fruits = ["apples","mango","pears","grapes"]

console.log(fruits)
console.log(fruits[1])

fruits.push('strawberry'); //end 
fruits.unshift('papaya'); // start
console.log(fruits) 

fruits.pop('orange') // remove last object from array
console.log(fruits) 

console.log(Array.isArray(fruits))
console.log(fruits.indexOf('mango'))



  
   
     
