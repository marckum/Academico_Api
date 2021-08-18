'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmaAlunoSchema extends Schema {
  up () {
    this.create('turma_alunos', (table) => {
      table.increments()
      table.integer('turma_id').references('id').inTable('turmas').unsigned().notNullable()
      table.integer('aluno_id').references('id').inTable('alunos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('turma_alunos')
  }
}

module.exports = TurmaAlunoSchema
