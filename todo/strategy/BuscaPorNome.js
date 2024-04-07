const BuscaStrategy = require('./BuscaStrategy')

class BuscaPorNome extends BuscaStrategy {
   constructor(contatos, termo) {
      super()
      this.contatos = contatos
      this.termo = termo
   }

   buscar(exactMatch = false) {
      //console.log(this.contatos, this.termo)
      if (exactMatch) {
         return this.contatos.filter((contato) =>
            contato.nome.toLowerCase().startsWith(this.termo.toLowerCase()),
         )
      } else {
         return this.contatos.filter((contato) =>
            contato.nome.toLowerCase().includes(this.termo.toLowerCase()),
         )
      }
   }
}

module.exports = BuscaPorNome
