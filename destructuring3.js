function rand({min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min
    return  Math.floor(valor) //apenas inteiro
}

/*
const obj = { max: 50, min: 40 }
console.log(rand(obj))

console.log('valor com floor: ' + rand())
console.log('valor com floor: ' + 321.98)  */
const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
/* aqui da problema, pois tenta destruturar algo com 
  null --console.log(rand())--   */
  