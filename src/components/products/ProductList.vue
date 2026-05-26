<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.
import { ref } from 'vue'
import { listaProdutos } from '@/data/product.js'
import ProductCard from './ProductCard.vue';
const produtos = ref(listaProdutos);
</script>

<template>
<ProductCard v-for="produto in produtos" :key="produto.id" class="produto-card"
:id="produto.id"
:titulo="produto.titulo"
:autor="produto.autor"
:resenha="produto.resenha"
:preco="produto.preco"
:capa="produto.capa"
/>
</template>

<style scoped>

</style>
