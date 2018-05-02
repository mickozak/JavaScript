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

//DECOMPOSITION

var objOne = {
    name: 'Michael',
    surname: 'Nowak'
}

const {name, surname} = objOne

console.log(name)
console.log(surname)

const tab = [1, 2, 3];

[a, b, c] = tab;

console.log(a, b, c)

//CLASS

class Animal {
    constructor(name){
        this.name=name;
    }
    eat(){
        return 'I eat food';
    }
}

const objAnimal = new Animal('Tiger')
console.log(objAnimal)

class Cats extends Animal{
    constructor(name){
        super(name);
        this.type='cat'
    }
    run(){
        return 'I can run'
    }
}

const objCat = new Cats('Max')
console.log(objCat)
