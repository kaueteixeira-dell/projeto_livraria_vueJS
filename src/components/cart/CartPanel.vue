<script setup>
// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.
import { inject } from 'vue'
import CartItem from './CartItem.vue';
import CartSummary from './CartSummary.vue';

defineProps({
  carrinho: { type: Array, default: () => [] },
  contagemItem: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
  })

  const incrementarQuantidade = inject('incrementarQuantidade');
  const decrementarQuantidade = inject('decrementarQuantidade');
  const removerDoCarrinho = inject('removerDoCarrinho');
  const checkout = inject('checkout');
</script>

<template>
  <div class="painel-carrinho">
    <h2>Carrinho de compras</h2>
    <div v-if="carrinho.length === 0" class="carrinho-vasiot">
      <p>Seu carrinho está vazio.</p>
      <router-link to="/" class="link-voltar">Voltar aos produtos</router-link>
    </div>
  </div>
      <CartItem v-for="produto in produtos"
        :key="item.id"
        :item="item"
        @incrementar="incrementarQuantidade"
        @decrementar="decrementarQuantidade"
        @remover="removerDoCarrinho">
      </CartItem>
</template>

<style scoped>

</style>
