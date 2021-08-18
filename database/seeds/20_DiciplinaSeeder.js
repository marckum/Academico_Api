'use strict'

/*
|--------------------------------------------------------------------------
| DiciplinaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Diciplina = use('App/Models/Diciplina')

class DiciplinaSeeder {
  async run () {
    await Diciplina.createMany([
      {nome: 'Backend', horas: 90, curso_id: 1},
      {nome: 'Frontend', horas: 60, curso_id: 1},
    ])
  }
}

module.exports = DiciplinaSeeder
