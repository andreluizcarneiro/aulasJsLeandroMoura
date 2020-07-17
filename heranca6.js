function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo',123)
const aula2 = new Aula('Ate Breve',456)
console.log(aula1,aula2)

/*simulando o new, quando temos uma funcao construtora
criamos um obj feito mas o prototipo do obj aponta pra funcao tb*/


//... operador spread resting, Params internamente vai ser um array
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)