const ContatoFactory = require('./ContatoFactory')
const ContatoPessoal = require('../models/ContatoPessoal')
const ContatoProfissional = require('../models/ContatoProfissional')

describe('ContatoFactory', () => {
   const factory = new ContatoFactory()
   test('Deveria Criar um novo contato Pessoal', () => {
      const tipo = 'pessoal'
      const nome = 'John Doe'
      const telefone = '1234567890'
      const email = 'johndoe@example.com'
      const extra = 'extra data'

      const contato = factory.criarContato(tipo, nome, telefone, email, extra)

      expect(contato).toBeInstanceOf(ContatoPessoal)
      expect(contato.nome).toBe(nome)
      expect(contato.telefone).toBe(telefone)
      expect(contato.email).toBe(email)
      expect(contato.extra).toBe(extra)
   })

   test('should create a new ContatoProfissional object', () => {
      const tipo = 'profissional'
      const nome = 'Jane Smith'
      const telefone = '9876543210'
      const email = 'janesmith@example.com'
      const extra = 'extra data'

      const contato = factory.criarContato(tipo, nome, telefone, email, extra)

      expect(contato).toBeInstanceOf(ContatoProfissional)
      expect(contato.nome).toBe(nome)
      expect(contato.telefone).toBe(telefone)
      expect(contato.email).toBe(email)
      expect(contato.extra).toBe(extra)
   })

   test('should throw an error for invalid contact type', () => {
      const tipo = 'invalid'
      const nome = 'Invalid Contact'
      const telefone = '1234567890'
      const email = 'invalid@example.com'
      const extra = 'extra data'

      expect(() => {
         factory.criarContato(tipo, nome, telefone, email, extra)
      }).toThrow('Tipo de contato inválido')
   })
})
