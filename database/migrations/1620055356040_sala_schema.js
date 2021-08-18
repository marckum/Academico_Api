'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalaSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()
      table.string('nome', 30).notNullable()
      table.integer('capacidade')
      table.string('tipo', 1).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalaSchema
