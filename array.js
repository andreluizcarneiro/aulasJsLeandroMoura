//temos um array declarado de forma literal
const valores = [7,7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
valores[4] = 10

console.log(valores)
console.log(valores.length)

//alem de que podemos misturar outras coisas dentro do array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
//mas não é uma boa prática

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)