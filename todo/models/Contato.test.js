const Contato = require('./Contato')

describe('Contato', () => {
   test('should create a new Contato object', () => {
      const nome = 'John Doe'
      const telefone = '1234567890'
      const email = 'johndoe@example.com'

      const contato = new Contato(nome, telefone, email)

      expect(contato.nome).toBe(nome)
      expect(contato.telefone).toBe(telefone)
      expect(contato.email).toBe(email)
   })
})
