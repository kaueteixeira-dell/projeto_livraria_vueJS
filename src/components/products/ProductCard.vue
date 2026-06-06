<script setup>
defineProps(['id', 'titulo', 'autor', 'resenha', 'preco', 'capa'])
</script>

<template>
  <div class="container">
    <img :src="capa" alt="">

    <div class="info">
      <h2>{{ titulo }}</h2>
      <p>{{ autor }}</p>
      <h3>R${{ preco }}</h3>
    </div>
  </div>
</template>

<style scoped>
p {
  color: gray;
}
h2 {
  font-weight: bold;
}
h3 {
  font-weight: bold;
}
img {
  width: 350px;
  height: 500px;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
