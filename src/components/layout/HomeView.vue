<script setup>
// Este arquivo é um componente Vue que representa a página inicial do aplicativo. Ele pode conter uma mensagem de boas-vindas, destaques dos produtos ou qualquer outra informação relevante para os visitantes que acessam o site pela primeira vez. O conteúdo específico da página inicial pode ser personalizado conforme as necessidades do projeto, mas geralmente serve como um ponto de entrada para os usuários explorarem o restante do site. Como sugestão, vocês poderão adicionar uma seção de "Destaques" ou "Novidades" para mostrar os produtos mais recentes ou populares, incentivando os visitantes a navegarem para a página de produtos.
</script>

<template>
  <main class="home">
    <section class="destaque">
      <div class="conteudo">
        <span class="tag">Livro Destaque</span>
        <h1>You Don't Know JS Yet</h1>
        <p>
          É uma série de livros voltada para quem quer aprender JavaScript de verdade, indo além do básico. Em vez de ensinar apenas a sintaxe, o autor explica como a linguagem funciona internamente.
        </p>
        <a href="produtos" class="btn">Acessar página de produtos</a>
      </div>

      <div class="imagem">
        <img src="https://m.media-amazon.com/images/I/71GsZGf3opL._SL1500_.jpg" alt="Capa do livro" />
      </div>
    </section>

    <section class="informacoes">
      <div class="info">
        <p>Frete grátis para SC</p>
      </div>

      <div class="info">
        <p>Livros recomendados</p>
      </div>

      <div class="info">
        <p>Mais vendidos</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  background: #f5f5f5;
  min-height: 100vh;
}

.destaque {
  max-width: 1200px;
  margin: auto;
  padding: 60px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.conteudo {
  max-width: 500px;
}

.tag {
  display: inline-block;
  border: 1px solid #2db36d;
  color: #2db36d;
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: #3d3131;
}

p {
  color: #666;
  line-height: 1.6;
}

.btn {
  display: inline-block;
  margin-top: 25px;
  padding: 12px 20px;
  background: #2db36d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.imagem img {
  width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.informacoes {
  background: white;
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 30px;
  border-top: 1px solid #ddd;
}

.info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info span {
  font-size: 1.5rem;
}

.info p {
  margin: 0;
  font-weight: bold;
}
</style>
