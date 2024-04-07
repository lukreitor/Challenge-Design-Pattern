const BuscaStrategy = require('./BuscaStrategy')

class BuscaPorEmail extends BuscaStrategy {
   constructor(contatos, termo) {
      super()
      this.contatos = contatos
      this.termo = termo
   }

   buscar(exactMatch = false) {
      //console.log(this.contatos, this.termo)
      if (exactMatch) {
         return this.contatos.filter((contato) =>
            contato.email.toLowerCase().startsWith(this.termo.toLowerCase()),
         )
      } else {
         return this.contatos.filter((contato) =>
            contato.email.toLowerCase().includes(this.termo.toLowerCase()),
         )
      }
   }
}

module.exports = BuscaPorEmail
