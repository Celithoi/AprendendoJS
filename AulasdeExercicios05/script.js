let entrada = document.querySelector('input#entrada')
let lista = document.querySelector('select#resultados')
let res = document.querySelector('div#res')
let valores = []

 //testando pegar o Enter como evento
var c = document.getElementById('entrada')

c.addEventListener("keypress",(event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('entrar').click();
        
    }
});

function isNumber(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    } else{return false}
}

function inlista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{return false}
}   


function entradaDeDados(){

    if(isNumber(entrada.value) && !inlista(entrada.value, valores)){
        valores.push(Number(entrada.value))   
        let item = document.createElement('option')
        item.text = `Valor ${entrada.value} adicionado` 
        lista.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert('valor não existe ou esta na lista') 

    }
    entrada.value = ''
    entrada.focus()
    

}

function validarDados(){

    if (valores.length == 0){
        window.alert('Adicione valores antes de Finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo, temos ${total} numeros cadastrados.<p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma dos valores informados foi ${soma}.`
        res.innerHTML += `<p> A media dos valores informados e igual a ${media}. </p>`
    }

}