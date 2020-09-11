//Exemplo desenvolvido juntamente com outras colegas do curso

console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const readline = require('readline-sync')

console.log(db)
//console.table(db) - Verificar comando para listar os produtos como tabela***

const {produtos}=db
console.table(produtos)

produtos.sort((a, b) => b.preco - a.preco)
console.table(produtos)


const idProdutos = parseInt(readline.question("Informe o ID do produto desejado: "))

const quantidade = parseInt(readline.question("Informe a quantidade do produto desejado: "))

const desconto = parseInt(readline.question("Você possui cupom de desconto? "))

function procurar(produto){
  return produto.id === idProdutos
}

const produtoEncontrado = produtos.find(procurar)
console.log (produtoEncontrado)

const subTotal = produtoEncontrado.preco * quantidade
console.log (subTotal)