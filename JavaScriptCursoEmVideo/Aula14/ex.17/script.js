function gerar(){
    var valor = window.document.getElementById("valor")
    var tabela = window.document.getElementById("tab")
    var n1 = Number(valor.value)
    var c = 0
    var s = 0
    tabela.innerHTML=("Tabela:<br>")
    while(c<10){
        c++ 
        tabela.innerHTML+=(`${n1} * ${c} = ${s}<br>`)
        s = c*n1
    }
}