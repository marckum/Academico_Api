'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aluno extends Model {

    static getCamposCadastro(){
        return ['aluno', 
                'cpf', 
                'data_nacimento', 
                'matricula', 
                'email', 
                'telefone', 
                'cep', 
                'logradouro', 
                'complemento', 
                'bairro', 
                'municipio', 
                'uf']
    }

    turmas(){
        return this.belongsToMany('App/Models/Turma').pivotTable('turmas_alunos')
    }
}

module.exports = Aluno
