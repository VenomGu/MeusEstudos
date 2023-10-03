const numbers = [1,2,3,4,5,6,7] 

//Separando valores entre par e impar dentro de uma const que contém dois objetos com arrays, par e impar, even and odds.
const inicialValue = { 
    even: [],
    odds: []
   }
const reduceResult = numbers.reduce((accumulator,currentValue)=>{  
    if(currentValue % 2 == 0){
    accumulator.even.push(currentValue)
}else{
    accumulator.odds.push(currentValue)
}
return accumulator
},inicialValue)

console.log(reduceResult)