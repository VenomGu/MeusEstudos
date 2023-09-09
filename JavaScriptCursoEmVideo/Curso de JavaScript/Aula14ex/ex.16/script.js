
function andar (){
    window.alert(`Começou!`)
    var inicio = window.document.getElementById("inicio")
   // inicio.style.background = "green"
    var fim = window.document.getElementById(`fim`)
   // fim.style.background = "blue"
    var passo = window.document.getElementById("passo")
   // passo.style.background = "red"
    var steps = window.document.getElementById("steps")
   // steps.style.background = `green`
    var contando = window.document.getElementById(`contando`)
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)
    var c = 1 
    steps.innerHTML = ("")
    contando.innerHTML=("Contando...")

    if(inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0){
        steps.innerHTML = (`Preencha os dados por favor.`)
    }  else if(n3 == 0){
              window.alert('Passo inválido! O passo será considerado 1')
              n3 = 1
              while(n1<n2) {
                n1+= n3 
                c++
                steps.innerHTML += (`&#x1F449 passo ${c}`)
                }
                steps.innerHTML +=(`&#x1F449 &#x1F6A9`)
            } else if (n1 == 0){
                steps.innerHTML = (`Preencha os dados por favor &#x1F6A9`)
                   } else if(n2 == 0){
                steps.innerHTML = (`Preencha os dados por favor &#x1F6A9`)
                 } else if(n2 == 0 && n1 == 0){
                    steps.innerHTML = (`Preencha os dados por favor &#x1F6A9`)}
                    else if(n1>n2){
                        steps.innerHTML = ("O Início deve ser menor que o Fim")
                    } else 
                 { 
         while(n1<n2) {
         n1+= n3 
         c++
         steps.innerHTML += (`&#x1F449 passo ${c}`)
         }
         steps.innerHTML += (`&#x1F449 &#x1F6A9`)
    }
}
