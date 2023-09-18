let num = window.document.getElementById('num') //Pegando o valor digitado pelo usuário
let sel = window.document.getElementById('sel')
let res = window.document.getElementById('res')
let vet = []

function isNumero(n){
    if(Number(n)>=1 || Number(n)<=100){
       return true
    } else {
        return false
    }
}
function inLista(n,l){//l é para verificar se tem o valor do vetor que está. E o n é o valor*/
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false 
    }
}

function adicionar(){ 
    if (isNumero(num.value) && !inLista(num.value, vet)){
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado.`)
        sel.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}

function finalizar(n){
    if (vet.length == 0){
        window.alert('Adicione um valor antes de finalizar')
    } else {
    let tot = vet.length
    let maior = vet[0]
    let menor = vet[0]
    let soma = 0
    let media = 0
    for(let pos in vet){
        soma += vet[pos]
        media = soma/tot
        if (vet[pos]>maior)
        maior = vet[pos]
    if (vet[pos]<pos)
    menor = vet[pos]
    }
    res.innerHTML += (`<p>Ao todo, temos ${tot} números cadastrados<p>`) 
res.innerHTML+= `<p>O maior valor informado foi ${maior}.</p>`
res.innerHTML+= `<p>O menor valor informado foi ${menor}.</p>`
res.innerHTML+= `<p>A soma dos valores foi ${soma}.</p>`
res.innerHTML+= `<p>A média dos valores foi ${media}</p>`

    }
 }
 