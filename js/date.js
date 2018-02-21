//The object Date() allows you to manipulate time and date.

//For example:

let currentDate = new Date();
    
console.log(currentDate);

//For example:
    
let element = document.querySelector('#divOneTest');

element.innerHTML='It is: ' + currentDate.getHours() + ':' + currentDate.getMinutes();

//For example:
    
function showZero (i){
    
    return (i<10) ? '0' + i : i;
    
}

let elementTwo = document.querySelector('#divTwoTest');

elementTwo.innerHTML='Today is: ' + showZero(currentDate.getDate()) + '.' + showZero(currentDate.getMonth()+1) + '.' + currentDate.getFullYear();

//For example:
    
let arrayWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let elementThree = document.querySelector('#divThreeTest');
    
elementThree.innerHTML='Today is: ' + arrayWeek[currentDate.getDay()];
