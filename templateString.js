const nome = 'Rebeca'
/* template string considera algumas coisas que a string
não consegue fazer, uma delas é a quebra de linha,
isso geraria um erro no code. 
Já o template string pode quebrar uma linha no meio,
do qual consideraria codigos em brancos.
Tendo uma INTERPOLAÇÃO, que converte */
const concatenacao = 'Olá' + nome + '!'
const template = `
  Olá
  ${nome}!`
console.log(concatenacao, template)

//expressoes ...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)