'use strict'

/*
|--------------------------------------------------------------------------
| SemestreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Semestre = use ('App/Models/Semestre')

class SemestreSeeder {
  async run () {
    await Semestre.createMany([
      {nome: 'Primeiro Semstre', data_inicio: '2020/02', data_fim: '2020/06'},
    ])
  }
}

module.exports = SemestreSeeder
