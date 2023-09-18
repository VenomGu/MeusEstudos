var num = window.document.getElementById('adi')
var inf = window.document.getElementById('inf')
var sel = window.document.getElementById('sel')
var vet = []

function isNumero(n=0){
    if (Number(n)<=0 || Number(n)>100){
        return false
    } else {
        return true
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true}
     else {
        return false
    }
}
function adicionar(){
    inf.innerHTML = ("")
    if(isNumero(num.value) && !inLista(num.value,vet)){
        vet.push(Number(num.value)) 
       var option=document.createElement('option')
        option.text =(`Valor ${num.value} adicionado`)
        sel.appendChild(option)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
        num.value = ''
        num.focus()
}

function finalizar(){
    inf.innerHTML=""
    if (vet.length == 0){
     window.alert('Digite um valor antes de finalizar')
    }else {
        var total = Number(vet.length)
        var soma = 0
        var menor = vet[0]
        var maior = vet[0]
        var media = 0
        for(var c in vet){
            soma += vet[c]
            media = soma/total
            if(vet[c]>maior){
                maior = vet[c]
            } 
            if(vet[c]<menor){
                menor = vet[c]
            }
        }
        inf.innerHTML += (`<p>O total de valores digitados foi ${vet.length}</p>`)
        inf.innerHTML += (`<p>O maior valor digitado foi ${maior}</p>`)
        inf.innerHTML+=(`<p>O menor valor digitado foi ${menor}</p>`)
        inf.innerHTML+=(`<p>A média dos valores foi ${media}</p>`)
        inf.innerHTML+=(`<p>O soma total dos valores é ${soma}</p>`)
    }
}
/* Nùmero deve estar entre 1 a 100, adionaná-los
dar erro se for menor que 1 ou maior que 100. 
Maior, menor, soma dos valores infomados, média dos valores. 
Apagar os valores quando finalizar. 
*/