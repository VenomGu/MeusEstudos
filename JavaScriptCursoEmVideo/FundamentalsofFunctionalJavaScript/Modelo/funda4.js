(function(name){
    let x = 9
    console.log('Hello!')
    console.log(name)

})("Arthur");
 //Ou como está abaixo. 
((name) =>{
    let x = 9
    console.log('Hello!')
    console.log(name)

})("Arthur");

//Criando uma function anônima.
//IIFE - Immediately Invoked Function Expression

console.log(x);
//Repare que da maneira que foi feito acima, o escopo de x está apenas dentro da function, portanto, nesse caso, o x aparecerá como is not defined. 

function hello(){
    let b = 10
}

console.log(b)

