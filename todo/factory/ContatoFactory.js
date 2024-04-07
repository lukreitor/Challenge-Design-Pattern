const ContatoPessoal = require('../models/ContatoPessoal')
const ContatoProfissional = require('../models/ContatoProfissional')

/**
 * Represents a factory for creating contacts.
 */
class ContatoFactory {
   /**
    * Cria um novo contato com base no tipo fornecido.
    *
    * @param {string} tipo - O tipo de contato ('pessoal' ou 'profissional').
    * @param {string} nome - O nome do contato.
    * @param {string} telefone - O telefone do contato.
    * @param {string} email - O email do contato.
    * @param {any} extra - Informações extras do contato.
    * @returns {ContatoPessoal|ContatoProfissional} O novo objeto de contato criado.
    * @throws {Error} Se o tipo de contato fornecido for inválido.
    */
   criarContato(tipo, nome, telefone, email, extra) {
      switch (tipo) {
         case 'pessoal':
         case '1':
            return new ContatoPessoal(nome, telefone, email, extra)
         case 'profissional':
         case '2':
            return new ContatoProfissional(nome, telefone, email, extra)
         default:
            throw new Error('Tipo de contato inválido')
      }
   }
}

module.exports = ContatoFactory
