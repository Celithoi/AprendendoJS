let valores = [8,1,7,4,2,9]

console.log(valores)
/*
for(let pos=0;pos<valores.length;pos++){

    console.log(`a posição atual é ${pos}e o valor desta posição é ${valores[pos]}`)
    
}
*/

// for para variaveis compostas ou objetos

for(let pos in valores){
    console.log(`a posição ${pos} te o valor ${valores[pos]}`)

}

// procurar um valor dentro de uma arrey.... variavel.indexOf(numero)
let pos = valores.indexOf(9)
if(pos == -1){
    console.log('não foi encontrado o valor')
}else{
    console.log(`o valor está na posição ${pos}`)
}
console.log(pos)