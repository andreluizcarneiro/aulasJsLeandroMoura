let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel sem usar var e let
abc = 3 // n pode fazer isso, pois localiza-se no global
console.log(global.abc)

//uma aula mais de node que JS