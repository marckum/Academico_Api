'use strict'

/*
|--------------------------------------------------------------------------
| SalaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Sala = use('App/Models/Sala')

class SalaSeeder {
  async run () {
    await Sala.createMany([
      {nome: 'Sala 02', capacidade: 40, tipo: '1'}
    ])
  }
}

module.exports = SalaSeeder
