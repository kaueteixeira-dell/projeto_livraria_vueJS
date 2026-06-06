<script setup>
import { computed, provide } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import { carrinho, incrementarQuantidade, decrementarQuantidade, removerDoCarrinho, checkout, calcularTotal, calcularContador } from '@/utils/cartUtils'

const contadorItem = computed(() => calcularContador())
const total = computed(() => calcularTotal())

provide('carrinho', carrinho)
provide('contadorItem', contadorItem)
provide('total', total)
provide('incrementarQuantidade', incrementarQuantidade)
provide('decrementarQuantidade', decrementarQuantidade)
provide('removerDoCarrinho', removerDoCarrinho)
provide('checkout', checkout)
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
