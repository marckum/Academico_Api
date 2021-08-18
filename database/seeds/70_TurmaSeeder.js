'use strict'

/*
|--------------------------------------------------------------------------
| TurmaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Turma = use('App/Models/Turma')

class TurmaSeeder {
  async run () {
    await Turma.createMany([
      {codigo: 10, 
       turno: '1', 
       professor_id: 1, 
       diciplina_id: 1, 
       sala_id: 1, 
       semestre_id: 1}
    ])

  }
}

module.exports = TurmaSeeder
