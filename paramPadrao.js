// estrategia 1 para -- Gerar Valor Padrão --
function soma1(a,b,c){
    a= a || 1
    b= b || 1
    c= c || 1
    return a + b + c 
}

console.log(soma1())
console.log(soma1(1,5))
console.log(soma1(1,5,10))
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//estrategia 2,3, e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    //se a for diferente de undefined pega o valor de a 
    // caso contrario pegue 1
    b = 1 in arguments ? b : 1
    //se existir 1 no argumentos, pegue o valor de b
    //se não, pegue o valor de 1
    c = isNaN(c) ? 1 : c  //Estratégia mais safe.
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//valor padrao do es2015 - Forma mais adequada
function soma3(a = 1, b=1,c=1){
    return a + b + c
}

console.log(soma3(),soma3(3),soma3(1,2,3), soma3(0,0,0))