function carregar() {
// Essa function está aqui e foi colocada no HTML pra ela iniciar onload, que// 
// é quando a página carrega, ela já vai ativar essa função//
var msg = window.document.getElementById("msg")
// msg é para pegar o elemento da section div //
var img = window.document.getElementById("imagem")
//essa img é criada pra pegar a id da div <img> pra mudar a imagem //
var data = new Date()
//a var data e new Date ( ) usada pra pegar a hora do sistema do usuário //
var bbb = window.document.getElementById("boa")
//essa serve foi usada pra pegar a mensagem de header div, pra mudar a mensagem do topo //
//var hora = data.getHours()
//essa var hora recebe o data.getHours() pra pegar apenas a hora, mas poderia ser getDay, getWeek etc.//
var hora = 3
if (hora>=5 && hora<=12){
    //aqui inicei o if, com essa condição que deve ter as duas condições para funcionar, deve ser nesse caso//
    //var hora maior e igual a 5 ou menor ou igual a 12, repare que no meio tem o &&, que indica que pra funcionar //
    //a condição exige que os dois sejam como pedido, se fosse || não funcionaria corretamente, pois seria 'ou' e não 'e' como && é //
    //Bom dia
    msg.innerHTML= `Agora são ${hora} horas da manhã`
    //esse comando serve para mudar a id criada no html, que foi atribuida na var msg, e innerHTML serve pra fazer essa mudança no HTML//
    bbb.innerHTML=`Bom dia!`
    //Aqui é a mesma coisa do comando de cima, só mudou a posição, que foi atribuida a var bbb que recebeu a id "boa"//
    img.src="dia_resized 650.png"
    //É assim que muda a var img que recebeu a id "imagem", esse comando com src muda a imagem no HTML//
    document.body.style.background='#87CEFA'
    //Usando esses "caminhos", o js chega no background e muda a correr se essa condição for ativada //
} else if (hora>=12 && hora<=17) {
 //Depois de if, eu usei o else if, repare como eu usei o else if e logo em seguida os ( ) para colocar a condição e //
  //só depois então que usei o colchetes { } pra jogar a condição//
           //Boa Tarde
           msg.innerHTML= `Agora são ${hora} horas da tarde`
           bbb.innerHTML='Boa tarde!'
           img.src = "tarde_resized 650.png"
           document.body.style.background = '#CD3700'
        }
        else if (hora>=18 && hora<=23) {
            msg.innerHTML= `Agora são ${hora} horas da noite`
            bbb.innerHTML=`Boa noite!`
           img.src="noite_resized 650.png"
           document.body.style.background ='#2F4F4F'
        //Boa noite
              }
             else if (hora>=0 && hora<=4){
            msg.innerHTML= `Agora são ${hora} horas da madrugada, vai dormir!`
             bbb.innerHTML='Vai dormir que tá tarde!'
             img.src="Dorme.png"
             document.body.style.background='#8B1A1A'
             //VAI DORMIR!
             }
             }
