const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'BostaSeca123654789', {
    host: "localhost",
    dialect: 'mysql'
})

// Postagem

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Titulo Aleatorio",
    conteudo: "hehehe hehehe"
})
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


Usuario.create({
    nome: "Victor",
    sobrenome: "Lima",
    idade: 20,
    email: "teste@gmail.com"
})
//Usuario.sync({force: true})