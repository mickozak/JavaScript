//Conversion is a change in the type of data.

//For example

let someVarOne = 'He is ' + 28;
console.log(someVarOne); //'He is 28'

let someVarTwo = '32' + 5;
console.log(someVarTwo); //'325'

let someValue = '25';
let someArray = [3];
console.log(someValue + someArray); //'253'

let someVarThree = '32' - 5;
console.log(someVarThree); //27

let someVarFour = '32a' - 5;
console.log(someVarFour); //Nan

//Adding gives more opportunity than subtraction. Possibility to use conversions in multiplication and division.

//Manual conversion function.

Number //e.g. (Number('100')) --> 100
parseInt //e.g. (parseInt('100b', 10)) --> 100

//Checking data types

//We use the "typeof" instruction to check the data type.

let one = 12;
let two = 'example';
let three = [2,3,6];


console.log(typeof(one)); //"number"
console.log(typeof(two)); //"string"
console.log(typeof(three)); //"object"
