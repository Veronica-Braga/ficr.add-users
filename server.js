const env = require('dotenv')
env.config()

// importando o express
const express = require ('express')

//Criando uma instancia do express
const app = express()

// Definido a porta que vai escutar a aplicação 
// Usar a porta definida na variável de ambiente PORT ou usar a 3000
const port = process.env.PORT || 3003

app.get('/', (req, res) => {
	return res.send ('API de cadastro de usuários')
})

app.listen(port)

// para mostrar que o servidor está rodando
console.log('Servidor funcionando na porta', port)
