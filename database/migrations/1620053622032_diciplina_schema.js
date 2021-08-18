'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiciplinaSchema extends Schema {
  up () {
    this.create('diciplinas', (table) => {
      table.increments()
      table.string('nome', 25).notNullable()
      table.integer('horas')
      table.integer('curso_id').references('id').inTable('cursos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('diciplinas')
  }
}

module.exports = DiciplinaSchema
