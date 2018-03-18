//setTimeout() - we run the code with a time delay.

function mySetTimeout (){
    console.log('Hello!');
}

setTimeout(mySetTimeout,3000);

//clearTimeout() - interrupts setTimeout().

clearTimeout(mySetTimeout);

//setInterval() - we run the code cyclically.

setInterval(mySetTimeout,2000);

//clearInterval() - interrupts setInterval().

clearInterval(mySetTimeout);

//For example:

function myFn(){
    
    let i = 0;
    
    let time = setInterval(function(){
        i++;
        console.log(i);
        if(i>=100){
            clearInterval(time);
            setTimeout(time,2000);
        }
    },500);
}

let one = setTimeout(myFn,2000);
