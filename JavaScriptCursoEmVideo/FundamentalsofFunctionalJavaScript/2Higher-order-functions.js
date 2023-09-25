/*
Function that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. 
*/

const smartphone = 400
const smarTv= 500
const NY_TAX=0.10
const DEN_TAX = 0.08

function applyTax(tax,price){
    return(tax * price) + price
}

console.log(applyTax(NY_TAX, smartphone))
console.log(applyTax(NY_TAX, smarTv))
console.log(applyTax(DEN_TAX, smartphone))
console.log(applyTax(DEN_TAX, smarTv))


/*Acima é uma maneira de calcular o valor e o imposto de um produto. Abaixo, uma outra maneira. */

const applyNyTax = (price) => (NY_TAX * price) + price
/*Em funções anônimas assim e usando arrow =>, não é necessário usar curly bracers {} */
const applyDenTax = (price)/*aqui em price, é passado o parametro, nesse caso foi o smarTv e então o processo é feito e armazenado dentro da const applyDenTax*/=> (DEN_TAX * price) + price

console.log(applyNyTax(smartphone))
console.log(applyNyTax(smarTv))
console.log(applyDenTax(smartphone))
console.log(applyDenTax(smarTv))


/*Maneira para pegar o valor de cada cidade ou estado que seja */

function applyCityTax(tax)/*parametro*/{
const getFinalPrice = (price) => (tax * price) + price
return getFinalPrice
}

const applyNytax2 = applyCityTax(NY_TAX)//isso é igual == (price) => (NYC_TAX * price) + price. 

const applyDentax2 = applyCityTax(DEN_TAX)//isso é igual == (price) => (NYC_TAX * price) + price. 


function applyCityTax(tax){
    //Currying
    /*
    In mathematics and computer science, currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
     */
    return (price) => (tax * price) + price
    }

    const CHI_TAX = 0.06
    console.log(applyCityTax(CHI_TAX)(smartphone))
