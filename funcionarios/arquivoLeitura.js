const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

console.log('------------------------------------------------------------')
//assincrona - JSON.parse transforma a string em Objeto
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//ler um diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)   
})