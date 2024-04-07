const BuscaPorNome = require('../strategy/BuscaPorNome')
const BuscaPorTelefone = require('../strategy/BuscaPorTelefone')
const BuscaPorEmail = require('../strategy/BuscaPorEmail')
const ContatoFactory = require('../factory/ContatoFactory')

class GerenciadorContatosFacade {
   constructor() {
      this.contatos = []
      this.factory = new ContatoFactory()
   }

   adicionarContato(tipo, nome, telefone, email, extra) {
      // verificar se o contato já existe
      if (this.contatos.find((contato) => contato.nome === nome)) {
         console.log('Contato já existe!')
         return
      }
      const contato = this.factory.criarContato(
         tipo,
         nome,
         telefone,
         email,
         extra,
      )
      this.contatos.push(contato)
   }

   removerContato(nome) {
      this.contatos = this.contatos.filter((contato) => contato.nome !== nome)
   }

   buscarContato(opcao, termo) {
      if (opcao === '1') {
         const busca = new BuscaPorNome(this.contatos, termo)
         this.exibirContato(busca.buscar())
      } else if (opcao === '2') {
         const busca = new BuscaPorTelefone(this.contatos, termo)
         this.exibirContato(busca.buscar())
      } else if (opcao === '3') {
         const busca = new BuscaPorEmail(this.contatos, termo)
         this.exibirContato(busca.buscar())
      } else {
         console.log('Opção inválida!')
      }
   }

   exibirContato(contatos) {
      contatos.forEach((contato) => {
         console.log(
            `Nome: ${contato.nome} - Telefone: ${contato.telefone} - Email: ${contato.email} - Apelido: ${contato.extra}`,
         )
      })
   }
}

module.exports = GerenciadorContatosFacade
