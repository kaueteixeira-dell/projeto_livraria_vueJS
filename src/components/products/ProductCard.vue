<script setup>
import { addCarrinho } from '@/utils/cartUtils'
import { toggleFavorito, isFavorito } from '@/utils/favoritosUtils'

const props = defineProps(['id', 'titulo', 'autor', 'resenha', 'preco', 'capa'])

function adicionarAoCarrinho() {
  addCarrinho(props.id, 1)
}

function favoritar() {
  toggleFavorito(props.id)
}
</script>

<template>
  <div class="container">
    <img :src="capa" alt="">

    <div class="info">
      <h2>{{ titulo }}</h2>
      <p>{{ autor }}</p>
      <h3>R${{ preco }}</h3>
      <div class="botoes">
        <button class="btn-carrinho" @click="adicionarAoCarrinho">Adicionar ao Carrinho</button>
        <button class="btn-favorito" @click="favoritar">
          <img src="../icons/like.svg" alt="Favoritar" :class="{ ativo: isFavorito(id) }">
        </button>
      </div>
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
.botoes {
  display: flex;
  gap: 8px;
  align-items: center;
}
.btn-carrinho {
  padding: 8px 12px;
  background-color: #2c5f2d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.btn-carrinho:hover {
  background-color: #1e421f;
}
.btn-favorito {
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
}
.btn-favorito img {
  width: 20px;
  height: 20px;
}
.btn-favorito img.ativo {
  filter: brightness(0) saturate(100%) invert(16%) sepia(99%) saturate(7474%) hue-rotate(357deg) brightness(97%) contrast(120%);
}
</style>
