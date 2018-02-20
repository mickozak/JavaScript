//Dialog boxes: alert, confirm, prompt. For example:

function myAlert(){
    alert('This is a beautiful website for you ...')
}

function myPrompt(){
    let myPrompt = prompt('What is your name?','Name...');
}

function myConfirm(){
    let myConfirm = confirm('Do you have 18 years?');
    if(myConfirm==true){
        alert('You can come in...')
    } else{alert('You can not come in...')}
}

myAlert();
myPrompt();
myConfirm();
