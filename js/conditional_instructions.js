//If

//General form: if (condition) {statement}

//e.g. 1.

let x = 2;

if (x == 2){
    alert('x=2');
} else {
    alert('x!=2')
}
    
//e.g. 2.

let answer = prompt('How much money do you want to spend for dinner?');

if (answer<=10){
    alert('You must stay at home.');
} else if (answer<=30){
    alert('You can go to the bar.');
} else {
    alert('You can go to the restaurant.')
}

//Switch e.g. 3.

let stones = prompt('What is the stone?')

switch(stones){
    case 'ruby':{
        console.log('You chose ruby.');
        break;
    }
    case 'amethyst':{
        console.log('You chose amethyst.');
        break;     
    }
    case 'diamond':{
        console.log('You chose diamond.');
        break;
    }
    case 'emerald':{
        console.log('You chose emerald.');
        break;
    }
    default: {
        console.log("I do not know what a stone is.");
    }
             }

//Conditional operator - a short version of the "if" condition.

let b = prompt('How much have you money?');
const control = (b>=1000) ? console.log('a lot of money...') : console.log('little money');
