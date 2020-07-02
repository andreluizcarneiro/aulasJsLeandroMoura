const fabricantes = ["Mercebes", "Audio", "Bmw"]

function imprimir(nome,indice){
    console.log(`${indice+1}.${nome}`)
} //assinatura de uma função que pode ser passada pra foreach

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
