// index.js
const readline = require('readline')
const GerenciadorContatosFacade = require('./service/gerenciadorContatosFacade')

const contatosFacade = new GerenciadorContatosFacade()

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

function menuPrincipal() {
   let sair = false
   console.log('\nMenu Principal:')
   console.log('1. Adicionar Contato')
   console.log('2. Remover Contato')
   console.log('3. Listar Contatos')
   console.log('4. Buscar Contato')
   console.log('5. Sair')

   rl.question('Selecione uma opção: ', (opcao) => {
      switch (opcao) {
         case '1':
            menuAdcionarContato()
            break
         case '2':
            rl.question('Digite o nome do contato: ', (nome) => {
               contatosFacade.removerContato(nome)
               menuPrincipal()
            })
            break
         case '3':
            menuListarContatos()
            break
         case '4':
            menuBuscarContato()

            break
         case '5':
            console.log('Saindo...')
            rl.close()
            break
         default:
            console.log('Opção inválida!')
            menuPrincipal()
      }
   })
}

function menuBuscarContato() {
   console.log('\nMétodo de busca:')
   console.log('1. Por Nome')
   console.log('2. Por Telefone')
   console.log('3. Por Email')
   console.log('4. Voltar')

   rl.question('Selecione um método de busca: ', (opcao) => {
      switch (opcao) {
         case '1':
            rl.question('Digite o nome: ', (nome) => {
               contatosFacade.buscarContato(opcao, nome)
               menuPrincipal()
            })
            break
         case '2':
            rl.question('Digite o telefone: ', (telefone) => {
               contatosFacade.buscarContato(opcao, telefone)
               menuPrincipal()
            })
            break
         case '3':
            rl.question('Digite o email: ', (email) => {
               contatosFacade.buscarContato(opcao, email)
               menuPrincipal()
            })
            break
         case '4':
            menuPrincipal()
            break
         default:
            console.log('Opção inválida!')
            menuBuscarContato()
      }
   })
}

function menuListarContatos() {
   console.log('\nContatos:')
   contatosFacade.contatos.forEach((contato, index) => {
      console.log(
         `${index}. Nome: ${contato.nome} - Telefone: ${contato.telefone}` +
            (contato.extra ? ` - Email: ${contato.email}` : ''),
      )
   })
   menuPrincipal()
}

function menuAdcionarContato() {
   console.log('\nAdicionar Contato:')
   console.log('1. Pessoal')
   console.log('2. Profissional')

   rl.question('Selecione o tipo de contato: ', (tipo) => {
      rl.question('Nome: ', (nome) => {
         rl.question('Telefone: ', (telefone) => {
            rl.question('Email: ', (email) => {
               if (tipo === '1') {
                  rl.question('Apelido: ', (apelido) => {
                     contatosFacade.adicionarContato(
                        tipo,
                        nome,
                        telefone,
                        email,
                        apelido,
                     )
                     menuPrincipal()
                  })
               } else if (tipo === '2') {
                  rl.question('Cargo: ', (cargo) => {
                     contatosFacade.adicionarContato(
                        tipo,
                        nome,
                        telefone,
                        email,
                        cargo,
                     )
                     menuPrincipal()
                  })
               }
            })
         })
      })
   })
}

menuPrincipal()
