function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        //res.innerHTML = `Idade calculada: ${idade} ` testar para ver se funciona
        var genero = ''
        //Criei uma tag com o nome img
        var img = document.createElement('img')
        //Criei uma id chamada id para a tag IMG
        img.setAttribute('id','foto')


        if (fsex[0].checked){
            genero = 'Homem'

            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','bbhomem.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','jvhomem.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','adhomem.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idhomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src','bbmulher.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','jvmulher.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','admulher.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idmulher.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.width = 250;
        img.height = 250;
        res.appendChild(img)

    }

} 