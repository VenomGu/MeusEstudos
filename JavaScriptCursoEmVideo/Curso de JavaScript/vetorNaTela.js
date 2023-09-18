let val = [8,1,7,4,2,9]
val.push(1651)
console.log(`${val}`)
//val.sort()

for(var pos = 0; pos<val.length;pos++){
    
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)

}
for(let pos in val){ // dessa maneira funcionará como está em cima, mas de maneira mais simples.
    console.log(val[pos])
}

console.log(val.indexOf(9))//usando o val.index(7), ele mostrará em qual casa está o valor 7. Caso o valor procurado dentro do Array não exista, o JavaScript retornará -1.
