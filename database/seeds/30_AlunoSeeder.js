'use strict'

/*
|--------------------------------------------------------------------------
| AlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Aluno = use('App/Models/Aluno')

class AlunoSeeder {
  async run () {
    await Aluno.createMany([
      {nome: 'Bruno de Oliveira Pinheiro',
       cpf: '055.333.471-94',
       data_nacimento: '2000/02/04',
       matricula: 20114290038,
       email: 'bruno.O_pinheiro@iesb.edu.br',
       telefone: '(61) 98206-7777',
       cep:'00.000-000',
       logradouro: 'xxxxxxxxx',
       complemento:'xxxxxxxxx',
       bairro:'xxxxxxxxxx',
       uf:'Df',
       municipio:'xxxxxxxx'}
    ])
  }
}

module.exports = AlunoSeeder
