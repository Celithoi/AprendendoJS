let entrada = document.querySelector('input#entrada')
let lista = document.querySelector('select#resultados')
let res = document.querySelector('div#res')
let valores = []

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
    }else{
        window.alert('valor não existe ou esta na lista') 

    }
    entrada.value = ''
    entrada.focus()
    

}

function validarDados(){


}