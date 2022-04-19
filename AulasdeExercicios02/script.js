
function carregar(){

    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    //teste
    //fim_teste

    var hora = 22

    msg.innerHTML = `agora são ${hora} horas`

    if(hora>=0 && hora<12){
        //BOM DIA
        imagem.src = 'bomdia.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora <18){
        //BOA TARDE
        imagem.src = 'boatarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        imagem.src = 'boanoite.png'
        document.body.style.background = '#515154'
    }

}

