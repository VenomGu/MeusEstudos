/*
Apples, Bananas, Grapes, Oranges
const fruits = ["Apples", "Bananas","Grapes","Oranges"]

const groceriesList = fruits.reduce((plate,eachFruit,index)=>{
    
    const GL = 'Groceries List'
    if (index === 0){
        plate+= '\n'
    }
    return `${plate} - ${eachFruit}\n`
},"Groceries List")
console.log(groceriesList)
*/

const names = [
    {name: "Apples", price:10},
    {name: "Bananas", price:5},
    {name: "Grapes", price:8},
    {name: "Oranges", price:9}
 ];
 console.log(names.name)
 const novoValor = {name: "Avocado", price:8}
if(!names.includes(novoValor.name)===true){//Jeito simples
    names.push(novoValor);
};
console.log(names)

 const totalPrice = names.reduce((accumulator,currentPrice)=>{
    accumulator+=currentPrice.price;
    return accumulator;
 },0);
 console.log(`O preço total é ${totalPrice}`);

 const list = names.reduce((accumulator,currentPrice)=>{
    accumulator+=`- ${currentPrice.name}\n`;
    return accumulator;
 },'');
console.log('Lista de produtos:\n'+list);
