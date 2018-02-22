//Storage - works in a similar way as "cookies". Data stored up to 5MB.
//Structure - session storage and local storage.
//For example:

let ob = {
    'one': 1,
    'two': 2,
    'three': 3
}

localStorage.setItem('myElements',JSON.stringify(ob));

