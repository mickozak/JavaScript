//The loop allows you to execute the code a certain number of times.

//for

//e.g.1

for (let x=0; x<100; x++){
    console.log('I will go to the gym on Monday');
}

//e.g.2

for (let i=0; i<=100; i++){
console.log(i)
}

//while 

//e.g.3

let i = 1;

while (i <=50) {
    console.log('I will go...');
    i++;
}

//The loop forEach - it is useful when, for example, you have an array with some elements and
//you want to do something for each of these elements.

//e.g.4

let car = ['Audi','Bmw', 'Fiat', 'Toyota'];

car.forEach(function(elements,index,array){
    index++;
    console.log(index + '. ' + elements);
});

//The loop do...while- repeats the instructions inside until the condition returns false.

//e.g.5
