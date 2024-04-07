const GerenciadorContatosFacade = require('./gerenciadorContatosFacade')
const ContatoFactory = require('../factory/ContatoFactory')

describe('GerenciadorContatosFacade', () => {
   let gerenciadorContatosFacade

   beforeEach(() => {
      gerenciadorContatosFacade = new GerenciadorContatosFacade()
   })

   test('should initialize with an empty list of contacts', () => {
      expect(gerenciadorContatosFacade.contatos).toEqual([])
   })

   test('should initialize with a ContatoFactory instance', () => {
      expect(gerenciadorContatosFacade.factory).toBeInstanceOf(ContatoFactory)
   })

   test('should add a contact if it does not exist', () => {
      gerenciadorContatosFacade.adicionarContato(
         '1',
         'andre',
         '123456789',
         'john@example.com',
         'extra info',
      )
      expect(gerenciadorContatosFacade.contatos).toEqual([
         expect.objectContaining({
            nome: 'andre',
            telefone: '123456789',
            email: 'john@example.com',
            extra: 'extra info',
         }),
      ])
   })

   test('should not add a contact if it already exists', () => {
      gerenciadorContatosFacade.adicionarContato(
         '1',
         'John Doe',
         '123456789',
         'john@example.com',
         'extra info',
      )
      gerenciadorContatosFacade.adicionarContato(
         '1',
         'John Doe',
         '123456789',
         'john@example.com',
         'extra info',
      )
      expect(gerenciadorContatosFacade.contatos).toEqual([
         expect.objectContaining({
            nome: 'John Doe',
            telefone: '123456789',
            email: 'john@example.com',
            extra: 'extra info',
         }),
      ])
   })

   // Add more tests for other methods here
})
