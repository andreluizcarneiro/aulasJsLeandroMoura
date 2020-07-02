let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) //nesse caso da true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//falso pq ta apontando pra obj agr pcausa do bind
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)