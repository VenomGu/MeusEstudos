/*
Function that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. 
*/

function add(a,b){
    console.log(`Performing ${a} + ${b}`)
    return a + b
}
function multiply(a,b){
    console.log(`Performing ${a} x ${b}`)
    return a * b
}

function subtract(a,b){
    console.log(`Performing ${a} - ${b}`)
    return a - b
}
function run(operation, a, b){
    const result = operation(a,b)
    console.log(`The result is : ${result}`)
}
run(add,2,2) //Repare que nesses casos, as duas funções são chamadas. 
run(multiply,2,5)
run(subtract,10,2) 
/*A função run serve para pegar o resultado das funções que você deseja, por exemplo, quando run(add, 2,2), ela vai para a função run com o parametro add, mais dois valores, o parametro add dentro da função run vai ser atribuido ao operation, ou seja operation vai receber o return da função chamada, nesse caso foi o add, então a operação dentro de add vai somar, os valores dos parametros e então a função result recebe o valor de dessa função add e mostra em result. E isso funciona em todos os casos, pois a função run só serve para mostrar os resultados das operações usando os parametros.  */

const divide = function(a,b){ //A função pode ser feita diretamente para uma variável que vai armazenar o return.
    console.log(`Performing ${a} - ${b}`)
    return a / b
}
run(divide,10,2)
//OU ASSIM

run(function(a,b){ // Assim, é possível usar uma função anônima quando run for chamada, já retornará o resultado da função.
    console.log(`Performing ${a} / ${b}`)
    return a / b
},10,2)
//Ou assim também
run((a,b) => { //usando Arrow => é mais direto ainda do que a anterior, o => já serve como função anônima aqui. 
    console.log(`Performing ${a} / ${b}`)
    return a / b
},10,2)

/*Resumindo, é possível usar funções como parametros. */