//Armazenando uma funcao em uma variavel

const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,10)

//Armazenando uma função ARROW em uma variável
const soma = (a,b) => {
    return a + b;
}

console.log(soma(2,20))

//retorno implicito.
const subtracao = (a,b) => a - b
console.log(subtracao(2,10))

const imprimir2 = a => console.log(a)
imprimir2('Possibilidade ainda de diminuir a sintaxe')