//Object

var objectOne = {
    name: 'Audi',
    age: 4,
    print: function () {
        console.log(this.name)
    }
}

objectOne.print();

//hasOnwProperty

console.log(objectOne.hasOwnProperty('name'));

//Object.value

console.log(Object.values(objectOne));

//Object.keys

console.log(Object.keys(objectOne));

//Object.entries

console.log(Object.entries(objectOne));

//For ... in

for (var prop in objectOne) {
    console.log(prop);
    console.log(objectOne[prop]);
}
