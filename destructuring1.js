// novo recurso do ES2015

const pessoa = {

    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'rua ABC',
        numero: 1000
    }

}
// destructuring abre as {} 

let teste1 = pessoa.nome;
console.log(teste1)

const { nome, idade } = pessoa 
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/*
const { conta: { ag, num } } = pessoa
console.log(ag,num)
Temos que ter certeza que o caminho até o dado esteja setado
*/
