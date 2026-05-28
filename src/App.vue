<script setup>
// Este arquivo é o componente principal do aplicativo Vue.js, responsável por estruturar a aplicação e renderizar os componentes principais. Ele inclui o AppHeader para a navegação e um RouterView para exibir o conteúdo das páginas com base nas rotas definidas. O App.vue serve como o ponto de entrada para a aplicação.
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
</style>
