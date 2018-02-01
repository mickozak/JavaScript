//If

//General form: if (condition) {statement}

//e.g. 1

let x = 2;

if (x == 2){
    alert('x=2');
} else {
    alert('x!=2')
}
    
//e.g. 2

let answer = prompt('How much money do you want to spend for dinner?');

if (answer<=10){
    alert('You must stay at home.');
} else if (answer<=30){
    alert('You can go to the bar.');
} else {
    alert('You can go to the restaurant.')
}
    
