const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o Primeiro!
console.log(pilotos)

pilotos.unshift('Teste') //adiciona no começo
console.log(pilotos)

//Splice pode adicionar ou remover elementos dentro de um array

//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover 
pilotos.splice(3,1) //Massa quebrou novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array gerado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)