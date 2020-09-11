
//## Carrinho de Compras

//Criar uma solução de um carrinho de compras.

//- Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo `database.js`

const dados = require(`./database.js`)
//console.log(dados)
const {produtos} = dados
//console.table(produtos)

produtos.sort((a,b) => a.preco - b.preco)
console.table(produtos)


//- Receber via terminal as entradas de `id` e `quantidade` dos produtos a serem adquiridos.

const read= require('readline-sync')

let confirmar = 'S' // Essa contante serve para fazer a veirficação do "do While" que vem depois
const array = new Array () // Nova lista para colocar os itens das compras 
class Pedido {
  constructor(array){
    this.products = array /// Caso exista o id as propriedade de ID e quantidade vão vim pra cá
    this.data = new Date()
    this.subtotal = 0 // Guarda o resultado da função "calcularSubtotal"
  }
  calcularSubtotal() { //Vai calculando o preço * quantidade de cada item das compras e no final retorna o valor total dos itens sem contar o desconto.
    this.subtotal = this.products.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
  }
}

do {
  const entradaId = parseInt(read.question('Digite o ID do item desejado: ')) // Recebe o id
  const entradaQuantidade = parseInt(read.question('Digite a quantidade: ')) // Recebe a quantidade 
  function procurar(produto){ 
    return produto.id === entradaId // Verifica se o ID recebido existe no "produto"
  }
  const produtoEncontrado = produtos.find(procurar) // Encontra onde exatamente está o ID
  if(!produtoEncontrado){ // Verificar se o id existe
    console.log('Erro. Produto não encontrado!')// se o ID não exite aparece essa mensagem
  }else{
    const produtoPedido= { ...produtoEncontrado, quantidade: entradaQuantidade} // se o ID existe vai para esse novo objeto
    array.push(produtoPedido) // o novo objeto vai para dentro do array que foi criado antes da classe
  }

  confirmar = read.question('Você deseja comprar mais algum item? (S/N) ')
}while (confirmar.toUpperCase() === 'S')

const pedido = new Pedido (array)// Joga o array com os push dentro da classe "Pedido"
console.table(pedido.products) // Verificando se deu certo o array dentro da classe 

pedido.calcularSubtotal() // chamando a função "calcularSubtotal"
console.log(pedido.subtotal) // Vendo o resultado da função "calcularSubtotal" qu está guardada dentro do subtotal

//- Perguntar se a cliente possue cupom de desconto. Caso a cliente digite 10, significa que terá 10% de desconto.
const cupom = parseInt(read.question("Digite o valor do seu cupom de desconto: ")) // Recebendo o valor do cupom

//- Calcular o valor do subtotal (sem considerar o desconto)
// calculei dentro da classe usando a função "calcularSubtotal"

//- Calcular o valor de desconto
const desconto = (cupom > 0 && cupom <= 15) ? pedido.subtotal * (cupom / 100) : 0
console.log(`Valor do desconto: R$ ${desconto}`)

//- Calcular o valor total (considerando o desconto do cupom)
const valorTotal = pedido.subtotal - desconto
console.log(`Valor total: R$ ${valorTotal}`)