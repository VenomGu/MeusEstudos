function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById(`txtano`)
var res = document.querySelector(`div#res`)
var img = document.getElementById('imagem')
if (fano.value.length == 0 || Number(fano.value)> ano) { 
    window.alert("[ERRO] verifique os dadoss e tente novamente!")
}else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked && idade>=26 && idade<=60) {
            genero = 'Homem'
            img.setAttribute('src','HomemAdulto.png')
        } else if (fsex[1].checked && idade>=26 && idade<=60) {
            genero = 'Mulher'
            img.setAttribute('src',"MulherAdulta.png")
        } else if (fsex[0].checked && idade<=4 && idade>=1){
            genero = 'Homem'
            img.setAttribute('src',"BebeMenino.jpg")
        } else if (fsex[1].checked && idade<=4 && idade>=1){
            genero = 'Homem'
            img.setAttribute('src',"BebeMenina.png")
        } else if (fsex[0].checked && idade>=61){
            genero = 'Homem'
            img.setAttribute('src',"Idoso.png")
        } else if (fsex[1].checked && idade>=61){
            genero = 'Mulher'
            img.setAttribute('src',"Idosa.png")
        } else if (fsex[0].checked && idade>=12 && idade<=25){
            genero = 'Homem'
            img.setAttribute('src',"Homemjovem.jpg")
        } else if (fsex[1].checked && idade>=12 && idade<=25){
            genero = 'Mulher'
            img.setAttribute('src',"MulherJovem.jpg")
        } else if (fsex[0] && idade<=11 && idade>=5){
            genero = 'Mulher'
            img.setAttribute('src',"MeninaCriança.jpg")
        } else if (fsex[1] && idade<=11 && idade>=5){
            genero= 'Homem'
            img.setAttribute('src','')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    } 
}
