console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

console.log(db)
//console.table(db) - Verificar comando para listar os produtos como tabela***

const {produtos}=db
console.table(produtos)

produtos.sort((a, b) => b.preco - a.preco)
console.table(produtos)




