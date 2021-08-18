'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaSchema extends Schema {
  up () {
    this.create('turmas', (table) => {
      table.increments()
      table.string('codigo', 10).notNullable()
      table.string('turno', 1).notNullable()
      table.integer('professor_id').references('id').inTable('professores').unsigned().notNullable()
      table.integer('diciplina_id').references('id').inTable('diciplinas').unsigned().notNullable()
      table.integer('sala_id').references('id').inTable('salas').unsigned().notNullable()
      table.integer('semestre_id').references('id').inTable('semestres').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('turmas')
  }
}

module.exports = TurmaSchema
