{ { { { var sera = 'Será?' } } } }

console.log(sera)

/*no caso da variável VAR 
ela fica visível fora do bloco
Além de que o tipo var só funfa no max em 2 escopos
*/

function teste(){
    var local = 123
    console.log(local)
}

teste()

/* quando criamos uma variavel fora de uma funcao
ela estara dentro de window, 
pois ela sera uma variavel global


Existe uma vantagem de ter essa variavel global
de podermos acessa-la em qualquer lugar no sistema.

Porém é se alguem utiliza-la com o mesmo id.
*/

