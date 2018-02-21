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
