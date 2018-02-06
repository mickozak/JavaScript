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
