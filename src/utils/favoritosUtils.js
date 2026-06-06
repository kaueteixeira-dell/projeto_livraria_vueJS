import { reactive } from 'vue'
import { produtos } from '@/data/product'

const favoritos = reactive([])

function toggleFavorito(id) {
  const index = favoritos.indexOf(id)
  if (index === -1) {
    favoritos.push(id)
  } else {
    favoritos.splice(index, 1)
  }
}

function isFavorito(id) {
  return favoritos.includes(id)
}

function getFavoritos() {
  return produtos.filter((p) => favoritos.includes(p.id))
}

export { favoritos, toggleFavorito, isFavorito, getFavoritos }
