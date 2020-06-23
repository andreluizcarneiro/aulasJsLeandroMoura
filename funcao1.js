//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
/* JS podemos passar apenas um valor,
do qual passará a ser undefined.*/
imprimirSoma(2)

imprimirSoma(2,4,4,5,6,7,8)

imprimirSoma()

/* portanto devemos esquecer o formalismo de passar
  os mesmos parametros no JS, pois tem uma certa
  flexibilidade e usar ao nosso favor */

function soma(a, b=0){
    return a + b
}

console.log(soma(10,5))
console.log(soma(2))
console.log(soma()) 