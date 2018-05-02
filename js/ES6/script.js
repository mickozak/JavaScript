//ARROW FUNCTION

function add(a,b) {
    return a + b
}

const add2 = function (a,b) {
    return a +b
}

const add3 = (a,b) => (
    a + b
)

console.log(add(2,3))
console.log(add2(2,7))
console.log(add3(10,10))

//SPREAD 

var one = [1,2,3,4,5,6,7,8,9]
var two = 'My name is Michal'

console.log(...one)
console.log(...two)

//REST 

function restParam(...param) {
    console.log(param)
}

restParam(1,2,4,5,6)
restParam()

//TEMPLATE STRINGS

var name = 'Michael'
var age = 25

console.log(`My name is ${name}. I am ${age} years old`);
