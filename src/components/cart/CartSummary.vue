// Este arquivo é um componente Vue que representa o último resumo do carrinho de compras, exibindo o total geral e um botão para finalizar a compra.
<script setup>
    import { formatCurrency } from '../../utils/currencyUtils'

    defineProps({
      contadorItem: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      }
    })

    defineEmits(['checkout'])
    </script>
<template>
  <div class="sumario-carrinho">
    <div class="linha-sumario">
      <span>Itens:</span>
      <span>{{ itemCount }}</span>
    </div>
    <div class="linha-sumario total">
      <span>Total:</span>
      <span>{{ formatCurrency(total) }}</span>
    </div>
    <button class="checkout-btn" @click="$emit('checkout')">Finalizar Compra</button>
  </div>
</template>


<style scoped>
.sumario-carrinho {
  padding: 16px 0;
  border-top: 2px solid #333;
  margin-top: 16px;
}

.linha-sumario {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.total {
  font-size: 20px;
  font-weight: bold;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background-color: #2c5f2d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 12px;
}

.checkout-btn:hover {
  background-color: #1e421f;
}
</style>
