'use strict'

/*
|--------------------------------------------------------------------------
| ProfessorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Professor = use('App/Models/Professor')

class ProfessorSeeder {
  async run () {
    await Professor.createMany([
      {nome: 'Rafael Cardoso Lima', 
       cpf: '090.222.190-51',
       matricula: 20111540089,
       salario: '3000',
       email: 'rafael_C_lima@iesb.edu.br',
       telefone: '(61) 98127-6671'},
    ])
  }
}

module.exports = ProfessorSeeder
