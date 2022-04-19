



function contar() {

    //pegando os valores do HTML

    let numero01 = window.document.querySelector('input#numero01')
    let numero02 = window.document.querySelector('input#numero02')
    let passo = window.document.querySelector('input#passo')
    let resultado = (window.document.querySelector('div#res'))

    // testando erro de digitação

    if(numero01.value.length == 0 || numero02.value.length == 0 || passo.value.lenght == 0 ){
        window.alert('[ERRO] faltam dados]')
        resultado.innerHTML = 'impossivel contar' 
    }else{
        resultado.innerHTML = 'Contando ...<br>' 

        //Convertendo valores de objeto para Numero

        let n1 = Number(numero01.value)
        let n2 = Number(numero02.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            alert('passo inválido! considerando passo 1')
            p = 1
        }
        if (n1<n2){
            for(let c = n1; c <=n2; c+=p){
            resultado.innerHTML += `${c} \u{1F449} `
            }
            
        }else{
            for(let c = n1; c >=n2; c-=p){
                resultado.innerHTML += `${c} \u{1F449} `
                }
            
        }
        resultado.innerHTML+= `\u{1F3C1}`
        
    }

    
    

}