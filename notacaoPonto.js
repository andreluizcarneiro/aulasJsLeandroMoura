console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2'  //+ flexibilidade 
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec.... \n')
    }
}

function Acao(beber, limpar, comer ){
    this.acao = beber
    this.Acao1 = limpar
    this.Acao2 = comer
    
}
  
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
const acao1 = new Acao('Beber coca','limpar a pia','comer mc')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

console.log(acao1.Acao1)
console.log(acao1.Acao2)

//FUNCAO - PARAMETRO - ATRIBUTO - VARIAVEL