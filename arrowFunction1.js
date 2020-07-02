let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola1 = () => 'Olá 1' //melhor forma de utiliza-lo
ola2 = _ => 'Olá 2' //possui um param
console.log(ola1())
console.log(ola2())
