//quando declaramos uma variavel VAR, sofre um hoisting

console.log('a =', a)
var a = 2

console.log('a =', a)


    function teste(){

        console.log('a =', a)
        var a = 2
        console.log('a =', a)

    }
//mesmo dentro de uma função, acontece isso.

