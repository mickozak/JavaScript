//The object has properties and methods. The object has no index. We refer to the object through properties.

let myObj = {
  name: "Sara",
  age: 27,
  print: function(){
    console.log(this.name)
    }
 }

//Reference to the object

myObj.print();

//or

console.log(myObj.height);

//adding a new property

myObj.surname = "Everdeen";

//removing properties

delete myObj.surname;

//Prototype

/*Each object is built on the basis of a prototype. 
A prototype is an object that generally describes the appearance of objects of a given type. 
If JavaScript does not find a property or method in our object, it searches for them in the prototype. 
The last level of search is Grand Master.*/

//The object class

/*The object class describes how objects will be created based on it.
We can create a class using the usual function. 
We write the new constructor with a capital letter.*/

function SuperObj(width, height){
  this.width = width;
  this.height = height;
}

SuperObj.prototype.print = function (){
     return this.width + ' ' + this.height;
}

let objOne = new SuperObj(200, 500);
let objTwo = new SuperObj(300, 500);
let objThree = new SuperObj(100, 500);

objOne.print();

//Heirdom - for example:

function Animal (name,age){
    this.name = name;
    this.age = age;
    this.type = 'animal';
}

Animal.prototype.eat = function (){
    return this.name + ' - eat';
}

function Cat (name){
    this.name = name;
    this.type = 'cat';
}

Cat.prototype = Object.create(Animal.prototype);

let max = new Cat ('Max');

console.log(max.eat());

//Factory - this is the place that some objects create for us using a pattern.

let Car = function(name){
    
    let carName = name;
    
    if (typeof carName === undefined) {
        carName = '';
    }

