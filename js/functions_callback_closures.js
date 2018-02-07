/*A function is a set of expressions that perform a task or calculate a value. 
To use a function, you must first define it somewhere in the range from which it will be called.*/

//Declaration of functions

function sum (a,b) {
	......
}

//Functional expression

let myFunction = function myFunction (a,b) {
	......
}

//Fat Arrow

let add = (a,b,c) => {
	......
}

//Anonymous function

document.querySelector('.title').addEventListener('click', function() {
	......
});

//Callback - the function passed to the function argument and then called.
	
function calc (a,b,callback){
	console.log(`Value: ${a} i ${b}`);
	return callback (a,b)
}
	
function add (a,b){
	return a+b;
}

calc(3,5,add);
