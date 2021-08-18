'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Curso = use('App/Models/Curso')

class CursoSeeder {
  async run () {
    await Curso.createMany([
      {nome: 'Analise e Desenvolvimento de Sistemas', duracao: 5}
    ])
  }
}

module.exports = CursoSeeder
