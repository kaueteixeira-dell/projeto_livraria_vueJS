<script setup>
    import { formataPreco } from '../../utils/currencyUtils'

    defineProps({
      item: {
        type: Object,
        required: true
      }
    })

    defineEmits(['incrementar', 'decrementar', 'remover'])
</script>


<template>
  <div class="cart-item">
    <div class="item-info">
      <h4 class="item-titulo">{{ item.titulo }}</h4>
      <p class="item-autor">{{ item.autor }}</p>
      <p class="item-preco">{{ formataPreco(item.preco) }}</p>
    </div>
    <div class="controle-item">
      <button class="quantidade-btn" @click="$emit('decrementar', item.id)">-</button>
      <span class="qty">{{ item.quantidade }}</span>
      <button class="quantidade-btn" @click="$emit('incrementar', item.id)">+</button>
      <button class="remover-btn" @click="$emit('remove', item.id)">Remover</button>
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

.item-info {
  flex: 1;
}

.item-titulo {
  margin: 0 0 4px 0;
}

.item-autor {
  margin: 0 0 4px 0;
  color: #666;
  font-size: 14px;
}

.item-preco {
  margin: 0;
  font-weight: bold;
  color: #2c5f2d;
}

.controle-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantidade-btn {
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

.remover-btn {
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
