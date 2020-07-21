const nums = [1,2,3,4,5]

//For com propósito
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado, nums)

const soma10 = a => a + 10
const triplo = a => a * 3
const paraDinheiro = a => `R$ ${parseFloat(a).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
