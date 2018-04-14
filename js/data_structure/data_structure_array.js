//The forEach() method executes a provided function once for each array element.

var newArray = [1,2,3,4,5,6,7,8,9];

newArray.forEach(function (value){
    return console.log(value+1);
})

//Unshift & push

var arrayOne = [1,2,3,4,5,6,7,8,9]

arrayOne.unshift(0);
arrayOne.push(10);

console.log(arrayOne);

//Shift & pop

arrayOne.shift();
arrayOne.pop();

console.log(arrayOne);

//Concat

var arrayTwo = [10,11,12,13,14,15];
var arrayThree = arrayOne.concat(arrayTwo);

console.log(arrayThree);

//Splice

var four = arrayThree.splice(3,7);

console.log(four);

//indexOf

var five = arrayThree.indexOf(1);

console.log(five);

//slice

var six = arrayThree.slice(2,5);

console.log(six);

//join

var seven = arrayThree.join(',');

console.log(seven);

//array.filter

var eight = [1,2,3,4,5,6,1,2,2,7,8,9]

var nine = eight.filter(function (value, index, array) {
    return value == 1
})

console.log(nine);

//array.find

var ten = eight.find(function (value,index,array) {
    return value > 6;
})

console.log(ten);

//array.reduce

var eleven = eight.reduce(function (result, value, index, array) {
   return result + value
},5);

console.log(eleven);

//array.map

var twelve = eight.map(function (value,index,array){
  return value + 3;
})

console.log(twelve)
