<script setup>
  import ProductCard from './ProductCard.vue';
  import { produtosFiltrados } from '@/data/productUtils.js';
</script>

<template>
  <h1>Lançamentos</h1>
  <div class="lista-produtos">
    <ProductCard
      v-for="produto in produtosFiltrados"
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
