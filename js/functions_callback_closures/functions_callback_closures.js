/*A function is a set of expressions that perform a task or calculate a value. 
To use a function, you must first define it somewhere in the range from which it will be called.*/

//Declaration of functions

function sum (a,b) {

}

//Functional expression

let myFunction = function myFunction (a,b) {

}

//Fat Arrow

let add = (a,b,c) => {

}
	
//IIFE (Immediately Invoked Function Expression) - immediate function call.

(function iife(){
    
})();

//Callback - the function passed to the function argument and then called.
	
function calc (a,b,callback){
	console.log(`Value: ${a} i ${b}`);
	return callback (a,b)
}
	
//Closure - functions declared within closings 'remember' the environment in which they were created.

function hello(name){
    return function(day){
        console.log(`Hi ${name} on this sunny ${day}`);
    }
}

const user = hello('Jan');
console.log(user);
console.log(user('Monday'));
	
function addNew (a,b){
	return a+b;
}

calc(3,5,add);

function mix(txt) {
    let newTxt = '';

    for (let i=0; i<txt.length; i++) {
        if (i % 2 === 0) {
            newTxt += txt.charAt(i).toUpperCase();
        } else {
            newTxt += txt.charAt(i).toLowerCase();
        }
    }
    return newTxt;
}
