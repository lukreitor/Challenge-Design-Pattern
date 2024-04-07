const Contato = require('./Contato.js')

class ContatoProfissional extends Contato {
   constructor(nome, telefone, email, extra) {
      super(nome, telefone, email)
      this.extra = extra
   }
}

module.exports = ContatoProfissional
