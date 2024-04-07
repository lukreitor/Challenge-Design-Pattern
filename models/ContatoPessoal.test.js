const ContatoPessoal = require('./ContatoPessoal')

describe('ContatoPessoal', () => {
   test('should create a new ContatoPessoal object', () => {
      const nome = 'John Doe'
      const telefone = '1234567890'
      const email = 'johndoe@example.com'
      const apelido = 'JD'

      const contatoPessoal = new ContatoPessoal(nome, telefone, email, apelido)

      expect(contatoPessoal.nome).toBe(nome)
      expect(contatoPessoal.telefone).toBe(telefone)
      expect(contatoPessoal.email).toBe(email)
      expect(contatoPessoal.extra).toBe(apelido)
   })
})
