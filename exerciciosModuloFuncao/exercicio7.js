function bhaskara (a, b, c) {
    let resultados = []
    let delta = (b ** 2) - ( 4 * b * c)
    if(delta < 0){
        return "Delta negativo"
    }
    let x1 = (-b + Math.sqrt(delta))/2*a
    let x2 = (-b + Math.sqrt(delta))/2*a
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}
    
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(1, 6, 2))

    
    
