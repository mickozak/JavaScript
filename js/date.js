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
