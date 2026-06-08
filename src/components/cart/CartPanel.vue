// Este arquivo é um componente Vue que permite ao usuário visualizar e gerenciar os itens em seu carrinho de compras. Ele exibe uma lista de itens, permite que o usuário ajuste as quantidades ou remova itens, e mostra um resumo do total do carrinho. O componente é projetado para ser usado em uma página de carrinho de compras, onde os usuários podem revisar seus itens antes de finalizar a compra.
<script setup>
      import { inject } from 'vue'
      import CartItem from './CartItem.vue'
      import CartSummary from './CartSummary.vue'

      const carrinho = inject('carrinho')
      const contadorItem = inject('contadorItem')
      const total = inject('total')
      const incrementarQuantidade = inject('incrementarQuantidade')
      const decrementarQuantidade = inject('decrementarQuantidade')
      const removerDoCarrinho = inject('removerDoCarrinho')
      const checkout = inject('checkout')
</script>


<template>
  <div class="painel-cart">
    <h2>Meu carrinho</h2>
    <div v-if="carrinho.length === 0" class="carrinho-vasio">
      <p>Seu carrinho está vazio.</p>
      <router-link to="/produtos" class="back-link">Voltar aos produtos</router-link>
    </div>
    <div v-else>
      <CartItem
        v-for="item in carrinho"
        :key="item.id"
        :item="item"
        @incrementar="incrementarQuantidade"
        @decrementar="decrementarQuantidade"
        @remove="removerDoCarrinho"
      />
      <CartSummary
        :contador-item="contadorItem"
        :total="total"
        @checkout="checkout"
      />
    </div>
  </div>
</template>


<style scoped>
.painel-cart {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.carrinho-vasio {
  text-align: center;
  padding: 48px 0;
}

.back-link {
  color: #2c5f2d;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
