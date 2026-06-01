<script setup>
  // Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.
  import { RouterLink } from 'vue-router';
  import produtosFiltrados from '@/data/productUtils.js';

  const buscarProdutos = (event) => {
    produtosFiltrados(event.target.value);
  };
</script>

<template>
  <header>
    <div class="logo">
      <h1>IFbooks</h1>
      <span>|</span>
      <p>apreço a<br>leitura</p>
    </div>
    <div class="barra-pesquisa">
      <input type="text" placeholder="pesquisar" @input="buscarProdutos"/>
      <button><img src="../icons/lupa.svg" alt="Lupa"></button>
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/produtos">Produtos</RouterLink></li>
        <li><RouterLink to="/">Equipe</RouterLink></li>
        <li><RouterLink to="/">Envio</RouterLink></li>
        <li><RouterLink to="/">Devoluções</RouterLink></li>
        <li><RouterLink to="/carrinho"><img src="../icons/carrinho.svg" alt="Carrinho"></RouterLink></li>
        <span>|</span>
        <li><RouterLink to="/"><img src="../icons/like.svg" alt="Like"></RouterLink></li>
        <span>|</span>
        <li><RouterLink to="/"><img src="../icons/login.svg" alt="Login"></RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

/* === RESET === */
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* === RESET === */


header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background-color: white;
  border-bottom: 2px solid rgb(36, 228, 36);
}
header nav {
  display: flex;
}
header nav ul {
  display: flex;
  gap: 20px;
  margin-left: 20px;
}
header p {
  font-size: 14px;
  color: rgb(88, 216, 88);
}
header a {
  font-size: 14px;
  color: rgb(112, 112, 112);
}
header a:hover, header img:hover {
  transition: 0.3s;
  color: rgb(100, 100, 100);
  font-weight: bold;
  img {
    filter: brightness(0.8);
    transition: 0.3s;
  }
}
header .logo {
  align-items: center;
  display: flex;
  gap: 10px;
}
header nav ul {
  align-items: center;
}
header .logo span {
  font-size: 1.65vw;
  color: rgb(88, 216, 88);
}
header nav span {
  font-size: 1.25vw;
  color: rgb(88, 216, 88);
}
header .barra-pesquisa input {
  padding: 12px 15vw 12px 1vw;
  background-color: rgb(240, 240, 240);
  border: none;
  border-radius: 1px;
  font-size: 17px;
}
header .barra-pesquisa {
  align-items: center;
  display: flex;
  gap: 10px;
  background-color: rgb(240, 240, 240);
  padding-right: 10px;
  border-radius: 1px;
}
header .barra-pesquisa button {
  border: none;
}
header .barra-pesquisa input:hover{
  background-color: rgb(228, 228, 228);
  transition: 0.3s;
}
header .logo h1 {
  font-size: 24px;
  color: rgb(0, 0, 0);
}
</style>
