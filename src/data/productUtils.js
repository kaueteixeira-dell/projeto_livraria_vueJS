import { produtos } from './product.js';

const produtosFiltrados = (filtro) => {
  if (!filtro) {
    return produtos;
  }
  const filtroLower = filtro.toLowerCase();
  const retorno = produtos.filter((produto) => {
    return (
      produto.titulo.toLowerCase().includes(filtroLower) ||
      produto.autor.toLowerCase().includes(filtroLower)
    );
  });
  alert(retorno[0].titulo);
  return retorno;
}

export default produtosFiltrados;
