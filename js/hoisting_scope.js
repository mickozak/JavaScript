//Hoisting - moving the declaration to the beginning of the code.

//e.g.

function one () {
   console.log(b);
   let b=10;
}

function one () {
  let b;
  console.log(b);
  b=10;
}
