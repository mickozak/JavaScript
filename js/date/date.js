//The object Date() allows you to manipulate time and date.

//For example:

let currentDateOneA = new Date();
    
console.log(currentDateOneA);

//For example:
    
let element = document.querySelector('#divOneTest');

element.innerHTML='It is: ' + currentDateOneA.getHours() + ':' + currentDateOneA.getMinutes();

//For example:
    
function showZero (i){
    
    return (i<10) ? '0' + i : i;
    
}

let elementTwo = document.querySelector('#divTwoTest');

elementTwo.innerHTML='Today is: ' + showZero(currentDateOneA.getDate()) + '.' + showZero(currentDateOneA.getMonth()+1) + '.' + currentDateOneA.getFullYear();

//For example:
    
let arrayWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let elementThree = document.querySelector('#divThreeTest');
    
elementThree.innerHTML='Today is: ' + arrayWeek[currentDateOneA.getDay()];

//For example:

let currentDateTwoB = new Date();
    
let currentHour = currentDateTwoB.getHours();
    
let elementFour = document.querySelector('#elementFour');

if (currentHour > 0 && currentHour < 6) {
    elementFour.innerHTML='Middle of the night';
} else if (currentHour>=6 && currentHour<9) {
    elementFour.innerHTML = 'Get up you are wasting a day'
} else if (currentHour>=9 && currentHour<19) {
    elementFour.innerHTML = 'Work, work, work, ...'
} else { elementFour.innerHTML = 'Time to go to sleep '};

//Setting the date and time
//For example:

let time = new Date(2010,5,10,12,20,12);    

let timeNew = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    
document.querySelector('#elementFive').innerHTML=timeNew;

//or

let currentDateOne = new Date();
    currentDateOne.setHours(19);
    currentDateOne.setMinutes(40);
    currentDateOne.setSeconds(20);

let textTwo = currentDateOne.getHours() + ':' + currentDateOne.getMinutes() + ':' + currentDateOne.getSeconds();

document.querySelector('#elementSix').innerHTML=textTwo;
