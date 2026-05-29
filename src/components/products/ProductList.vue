<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import { ref } from 'vue'
import { produtos } from '@/data/product.js';
import ProductCard from './ProductCard.vue';
const listaProdutos = ref(produtos);
</script>

<template>
  <h1>Lançamentos</h1>
  <div class="lista-produtos">
    <ProductCard
      v-for="produto in listaProdutos"
      :key="produto.id"

      :id="produto.id"
      :titulo="produto.titulo"
      :autor="produto.autor"
      :resenha="produto.resenha"
      :preco="produto.preco"
      :capa="produto.capa"
    />
  </div>
</template>

<style scoped>
h1 {
  margin: 2vw 8vw;
  font-weight: bold;
}
.lista-produtos {
  margin: 2vw 0;
  display: grid;
  grid-template-columns: repeat(4, 20vw);
  gap: 20px;
  justify-content: center;
}
</style>
