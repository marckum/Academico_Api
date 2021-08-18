'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorSchema extends Schema {
  up () {
    this.create('professores', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.biginteger('cpf').notNullable()
      table.string('matricula', 15).notNullable()
      table.float('salario')
      table.string('email', 100)
      table.string('telefone', 15)
      table.timestamps()
    })
  }

  down () {
    this.drop('professores')
  }
}

module.exports = ProfessorSchema
