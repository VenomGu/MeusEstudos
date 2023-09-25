/*
const numbers = [1,2,3,4,5,6,7]
let timesTwo = []

for (let index = 0; index < numbers.length; index++) {
    const currentValue = numbers[index]
    console.log(numbers[index])
    timesTwo.push(currentValue*2)
}
console.log(`original Array: ${numbers}`)
console.log(`result: ${timesTwo}`) 

SOLUÇÃO DO CURSO
*/
/* 
MINHA SOLUÇÃO 

const numbers = [1,2,3,4,5,6,7]
let timesTwo = []

function run(a,b){
    for(var c in numbers){
        timesTwo.push(a[c]*b)
    }
}
run(numbers,2)
console.log(timesTwo)

*/

//Agora usando MAP
/*
CurrentValue:
      The current element being processed in the array. 

index(Optional): 
      The index of the current element being processed in the array.

array(optional):
      The array map was called upon.

thisArg(Optional): 
      Value to use as this when executing callback.      
*/
const numbers = [1,2,3,4,5,6,7]

const timesTwo = numbers.map(currentValue=>currentValue+2)
console.log(timesTwo)

/* usando o map, passo a passo aqui. 
primeiro: os valores da const numbers são jogados em currentValue que pra primeira parte, por ser apenas um parametro, chama o currentValue*2, que fará o valor de cada valor do vetor * 2 e atribuirá em const timesTwo. 
*/