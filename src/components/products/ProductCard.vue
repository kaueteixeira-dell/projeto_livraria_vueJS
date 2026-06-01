<script setup>
// Este arquivo é um componente Vue que permite componentizar a exibição de um produto individual em uma lista de produtos. Ele exibe as informações do produto, como nome, preço e imagem, e pode incluir um botão para adicionar o produto ao carrinho de compras. O componente é projetado para ser reutilizado em diferentes partes do aplicativo onde a exibição de produtos é necessária, como na página de listagem de produtos ou em recomendações de produtos relacionados. Como sugestão, não exiba todas as informações do Livro, deixando alguma div oculta e trabalhando o v-for ou v-if para exibir somente o nome e o preço, e ao clicar em um botão "Detalhes" ou "Ver mais", exiba as informações adicionais do produto, como descrição, autor e imagem. Isso pode ser feito usando uma propriedade de estado para controlar a visibilidade das informações adicionais.

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
