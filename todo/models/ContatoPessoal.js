const Contato = require('./Contato.js')

/**
 * Represents a personal contact.
 * @extends Contato
 */
class ContatoPessoal extends Contato {
   /**
    * Creates a new instance of the ContatoPessoal class.
    * @constructor
    * @param {string} nome - The name of the contact.
    * @param {string} telefone - The phone number of the contact.
    * @param {string} email - The email address of the contact.
    * @param {string} extra - The nickname of the contact.
    */
   constructor(nome, telefone, email, extra) {
      super(nome, telefone, email)
      this.extra = extra
   }
}

module.exports = ContatoPessoal
