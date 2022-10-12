function insere(num){
    var resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado + num
}

function clean(){
    var resultado = document.querySelector('#resultado').innerHTML = ''
}

function calcular(){
    var resultado = document.querySelector('#resultado').innerHTML
    if(resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado)
    }
}