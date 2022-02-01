function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0  || Number(fano.value) > ano ){
        alert ('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img  = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancamas.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemmas.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'adultomas.jpg')
            }else {
                img.setAttribute('src', 'idosomas.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancafem.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemfem.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'adultofem.jpg')
            }else {
                img.setAttribute('src', 'idosofem.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
} 