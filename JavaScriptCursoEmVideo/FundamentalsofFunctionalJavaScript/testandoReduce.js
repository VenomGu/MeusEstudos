const numbers = [1,2,3,4,5,6,7] //28

const valorInicial=0
const somando = numbers.reduce((acumulador, valorAtual)=>{
    if(acumulador % 2 ===0){
        return acumulador+valorAtual,valorInicial }
    else{
        return acumulador+valorAtual,valorInicial
    }},0)

console.log(somando)
