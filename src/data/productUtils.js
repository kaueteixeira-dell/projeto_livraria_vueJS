import { ref } from 'vue';
import { produtos } from './product.js';

const produtosFiltrados = ref([...produtos]);
const buscarProdutos = (filtro) => {
  if (!filtro) {
    produtosFiltrados.value = produtos;
    return;
  }

  const filtroLower = filtro.toLowerCase();

  produtosFiltrados.value = produtos.filter((produto) => {
    return (
      produto.titulo.toLowerCase().includes(filtroLower) ||
      produto.autor.toLowerCase().includes(filtroLower)
    );
  });
}

export { produtosFiltrados, buscarProdutos };
