Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i<this.length;i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco":3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

//retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
//converte um txt para obj
const apenasPreco = produto => produto.preco 

//agora podemos chamar duas vezes o map

const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)

