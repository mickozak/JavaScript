//Key word this does not refer to the current function nor is a reference to the lexical scope of this function.
//This is a binding that arises when calling a function.

//Types of bonds:

//#1

function one() {
    console.log(this.variableOne);
}
    
var variableOne = 2;
    
one();


