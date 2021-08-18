'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.biginteger('cpf')
      table.date('data_nacimento')
      table.string('matricula', 10).notNullable()
      table.string('email', 100)
      table.string('telefone', 15).notNullable()
      table.string('cep', 30)
      table.string('logradouro', 100)
      table.string('complemento', 100)
      table.string('bairro', 100)
      table.string('uf', 2)
      table.int('municipio')
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
