console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//string array e object, tem um atributo chamado .PROTOTYPE

//split quebra a string em cada uma das letras e reverte
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('subinoonibus'.reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function(){
    return 'Deu Ruim'
}
//tomar cuidado com os efeitos colaterais
console.log('Escola Cod3r'.reverse())
