const BuscaPorNome = require('./BuscaPorNome')

describe('BuscaPorNome', () => {
   let buscaPorNome
   let contatos

   beforeEach(() => {
      contatos = [
         { nome: 'John Doe' },
         { nome: 'Jane Smith' },
         { nome: 'Alice Johnson' },
      ]
      buscaPorNome = new BuscaPorNome(contatos)
   })

   test('should return an empty array if no contacts match the search term', () => {
      buscaPorNome.termo = 'Invalid Name'
      const result = buscaPorNome.buscar()
      expect(result).toEqual([])
   })

   test('should return an array of contacts that match the search term', () => {
      buscaPorNome.termo = 'John'
      const result = buscaPorNome.buscar(true)
      expect(result).toEqual([{ nome: 'John Doe' }])
   })

   test('should return an array of contacts that partially match the search term', () => {
      buscaPorNome.termo = 'Smith'
      const result = buscaPorNome.buscar()
      expect(result).toEqual([{ nome: 'Jane Smith' }])
   })

   test('should return an array of contacts that match the search term case-insensitively', () => {
      buscaPorNome.termo = 'alice'
      const result = buscaPorNome.buscar()
      expect(result).toEqual([{ nome: 'Alice Johnson' }])
   })
})
