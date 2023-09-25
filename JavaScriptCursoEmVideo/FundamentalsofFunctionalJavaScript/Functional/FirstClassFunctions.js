/*
A programming language is said to have First-class functions when functions in that language are treated like any other variable

First-Class functions can be: 
- Assigned as a value to a variable. 
- Passed as an argument to other functions. 
- Returned by another function. 
*/

function add1(a,b){
    return a + b
}

const addOperation = add1
//Nesse caso a function foi adicionada a const. 

console.log(add1(2,2))

/*A variable can be a function in javaScript */

const add2 = (a,b) => {
//Nesse caso ja foi adicionada um function anonima dentro da const. 
    return a + b
}
console.log(add2(2,2))