function gerar(){
    var valor = window.document.getElementById("valor")
    var box = window.document.getElementById("tabb")
    var n1 = Number(valor.value)
    c = 0
    
    box.innerHTML = "" //Limpando
    if(n1!=0){ //diferente de zero para poder * negativos
    for(var c;c<=10;c++){ 
        let item = document.createElement('option') //Criei var para criar um elemento dentro do option no HTML.
        item.innerText= (`${n1} x ${c} = ${n1*c}`)
        // então aqui, o texto da var recebe o resultado.
        box.appendChild(item) //o appendChild vai jogar para dentro do box o item, no caso o innerText dele. 
    }
    } else if (n1==0) {
        let item = document.createElement('option') // Criei esse var pra poder crirar um elemento dentro do option no HTML. 
        box.innerHTML="" // limpando
        item.text = `Digite um valor multiplicável, por favor` //Pode usar innerText, innerHTML ou text.
        box.appendChild(item) //o appendChild vai jogar para dentro do box o item, no caso o innerText dele.
       } 
       }