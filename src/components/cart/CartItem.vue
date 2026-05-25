<script setup>
// Este arquivo é para o componente CartItem.vue, que representa um item individual no carrinho de compras. Ele exibe as informações do produto, como nome, preço e quantidade, e permite que o usuário ajuste a quantidade ou remova o item do carrinho.
import { produtos } from '@/data/product';
import { formataPreco } from '@/utils/currencyUtils';
import { ref } from 'vue'
defineProps({
  item: {
    type: Object,
    required: true
  }})
 defineEmits(['incrementar', 'decrementar', 'remover'])

</script>

<template>
    <div class="item-carrinho">
    <div class="info-item">
      <h4 class="titulo-item">{{ item.titulo }}</h4>
      <p class="autor-item">{{ item.autor }}</p>
      <p class="preco-item">{{ formatCurrency(item.preco) }}</p>
    </div>
    <div class="controle-item">
      <button class="quantidade-btn" @click="$emit('decrease', item.id)">-</button>
      <span class="quantidade">{{ item.quantidade }}</span>
      <button class="quantidade-btn" @click="$emit('increase', item.id)">+</button>
      <button class="remove-btn" @click="$emit('remove', item.id)">Remover</button>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.info-item {
  flex: 1;
}

.titulo-item{
  margin: 0 0 4px 0;
}

.autor-item{
  margin: 0 0 4px 0;
  color: #666;
  font-size: 14px;
}

.preco-item{
  margin: 0;
  font-weight: bold;
  color: #2c5f2d;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 18px;
}

.qty {
  min-width: 32px;
  text-align: center;
}

.remove-btn {
  padding: 6px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #c82333;
}
</style>
