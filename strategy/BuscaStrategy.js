class BuscaStrategy {
   buscar(contatos, termo) {
      throw new Error('Método buscar deve ser implementado pelas subclasses')
   }
}

module.exports = BuscaStrategy
