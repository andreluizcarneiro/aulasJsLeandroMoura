// par nome/valor
const saudacao = 'Teste' //contexto Léxico 1.

function exec(){
    const saudacao = 'Chave: nome Saudacao - Valor: String aqui dentro'
    //contexto Léxico 1.
    return saudacao

}

//Objetos são grupos aninhados de pares nome/valor
const cliente = { 
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
