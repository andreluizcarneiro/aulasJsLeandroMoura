const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

/* retorna um numero atraves da tabela da unicode,
 relacionado ao numero 3 */
 console.log(escola.charCodeAt(3))

/* temos um digito e queremos saber que indice
ele esta na frase */
console.log(escola.indexOf('3'))
console.log(escola.indexOf('C'))

console.log(escola.substring(1))

/* vai do 0 até o indice 3, sem incluir o indice 3 */
console.log(escola.substring(0,3))

/* Literal = ' ' , valor direto, sem armazenar */ 
console.log('Escola' .concat(escola).concat("!"))

/*em vez de usar o concat podemos usar o + */
console.log('Escola' + escola + "!")

/* Utilizando Rejects */
console.log(escola.replace(3, 'e'))

/*Quebra em array apartir da Vircula*/
console.log('Ana Maria,Pedro'.split(','))   