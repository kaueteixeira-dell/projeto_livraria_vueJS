<script setup>
import { computed } from 'vue'
import { getFavoritos } from '@/utils/favoritosUtils'

const favoritos = computed(() => getFavoritos())
</script>

<template>
  <div v-if="favoritos.length === 0" class="vazio">
    <h1>Favoritos</h1>
    <p>Você ainda não tem livros favoritados.</p>
  </div>
  <div v-else>
    <h1>Meus Favoritos</h1>
    <div class="lista-favoritos">
      <div v-for="produto in favoritos" :key="produto.id" class="card">
        <img :src="produto.capa" :alt="produto.titulo">
        <p class="autor">{{ produto.autor }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 2vw 8vw;
  font-weight: bold;
}
.lista-favoritos {
  margin: 2vw 0;
  display: grid;
  grid-template-columns: repeat(4, 20vw);
  gap: 20px;
  justify-content: center;
}
.card {
  text-align: center;
}
.card img {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
}
.autor {
  margin-top: 8px;
  color: gray;
  font-size: 14px;
}
.vazio {
  text-align: center;
  padding: 48px 0;
}
.vazio p {
  color: #666;
  font-size: 18px;
}
</style>
