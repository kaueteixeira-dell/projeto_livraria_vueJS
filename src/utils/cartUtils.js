// Este arquivo é um módulo JavaScript que contém a lógica relacionada ao carrinho de compras em um aplicativo Vue.js. Ele define uma estrutura de dados para representar os itens no carrinho, incluindo informações como id, título, autor, resenha, preço, capa (URL da imagem), quantidade e preço total. O módulo também exporta uma função addCarrinho que permite adicionar um livro ao carrinho, atualizando a quantidade e o preço total conforme necessário. A função utiliza a lista de produtos importada do arquivo /src/data/product.js para encontrar as informações do livro com base no id fornecido. Este módulo é projetado para ser usado em componentes relacionados ao carrinho de compras, permitindo que os usuários adicionem livros ao carrinho e visualizem os itens selecionados. AINDA PRECISAM SER ADICIONADAS VÁRIAS FUNÇÕES AQUI!!!
//Exemplo: Remover itens do carrinho, adicionar quantidade para o item já no carrinho, remover quantidade para o item já no carrinho, calcular o total do carrinho, filtrar livros por autor, por preço, etc. Vocês podem criar funções para cada uma dessas funcionalidades e exportá-las para serem usadas em outros componentes do aplicativo, como o ProductList.vue, onde o usuário poderá filtrar os livros disponíveis, ou no CartPanel.vue, onde o usuário poderá gerenciar os itens em seu carrinho de compras.

import { reactive } from 'vue'
import { produtos } from '@/data/product'

const carrinho = reactive([])

function addCarrinho(idLivro, quantidade) {
  const livro = produtos.find((p) => p.id === idLivro)
  if (livro) {
    const itemExistente = carrinho.find((item) => item.id === idLivro)
    if (itemExistente) {
      itemExistente.quantidade += quantidade
      itemExistente.precoTotal = itemExistente.quantidade * livro.preco
    } else {
      carrinho.push({
        ...livro,
        quantidade,
        precoTotal: quantidade * livro.preco,
      })
    }
  }
}

function incrementarQuantidade(id) {
  const item = carrinho.find((i) => i.id === id)
  if (item) {
    item.quantidade++
    item.precoTotal = item.quantidade * item.preco
  }
}

function decrementarQuantidade(id) {
  const item = carrinho.find((i) => i.id === id)
  if (item) {
    if (item.quantidade > 1) {
      item.quantidade--
      item.precoTotal = item.quantidade * item.preco
    } else {
      removerDoCarrinho(id)
    }
  }
}

function removerDoCarrinho(id) {
  const index = carrinho.findIndex((i) => i.id === id)
  if (index !== -1) {
    carrinho.splice(index, 1)
  }
}

function checkout() {
  alert('Compra finalizada com sucesso!')
  carrinho.splice(0, carrinho.length)
}

function calcularTotal() {
  return carrinho.reduce((acc, item) => acc + item.precoTotal, 0)
}

function calcularContador() {
  return carrinho.reduce((acc, item) => acc + item.quantidade, 0)
}

export { carrinho, addCarrinho, incrementarQuantidade, decrementarQuantidade, removerDoCarrinho, checkout, calcularTotal, calcularContador }
