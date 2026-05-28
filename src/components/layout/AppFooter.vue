<script setup>
  // Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.
  import { RouterLink } from 'vue-router';
</script>

<template>
  <footer>
    <div class="container">
      <div class="link-redes">
    <h1>IFbooks</h1>
    <nav>
      <ul>
        <li><RouterLink to="/"><img src="../icons/facebook.svg" alt="Facebook"></RouterLink></li>
        <li><RouterLink to="/"><img src="../icons/x.svg" alt="X"></RouterLink></li>
        <li><RouterLink to="/"><img src="../icons/instagram.svg" alt="Instagram"></RouterLink></li>
      </ul>
    </nav>
    </div>
    <div class="contato">
      <h2>Contato</h2>
      <ul>
        <li>
          <img src="../icons/telefone.svg" alt="Telefone">
          <p>+55 47 40045263</p>
        </li>
        <li>
          <img src="../icons/relogio.svg" alt="Horários">
          <p>8h às 23h - Seg a Sex</p>
        </li>
        <li>
          <img src="../icons/email.svg" alt="Email">
          <p>contato@ifbooks.com</p>
        </li>
        <li>
          <img class="forma-pagamento" src="../icons/estilo-pagamento.png" alt="Formas de pagamento">
        </li>
      </ul>
    </div>
    </div>
    <div class="copyright">
      <p>&copy; Alguns direitos reservados. IFbooks 2025.</p>
    </div>
  </footer>
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


footer {
  background-color: #27AE60;
}
footer .container {
  padding: 3vw 5vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
}
footer h1 {
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 8px;
}
footer nav ul {
  display: flex;
  gap: 3px;
}
footer nav ul li a:hover {
  opacity: 0.8;
}
footer .contato ul li{
  display: flex;
  margin: 1vw 1vw;
}
footer .contato p {
  color: white;
  margin-left: 15px;
}
footer .contato h2{
  font-size: 1.4rem;
  color: white;
  font-weight: 500;
}
footer .copyright {
  text-align: center;
  padding: 1vw 3vw;
}
</style>
