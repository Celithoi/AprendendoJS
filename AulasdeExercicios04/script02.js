

function Tabuada(){
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#seltab')

    if(num.value.length == 0){

        window.alert('Por Favor! Digite um numero no espaço abaixo')

    }else{

        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c=1 ;c <=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }


        /*caso fosse feito com while
        
        let c=1
        tab.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
        
        */



    }


}