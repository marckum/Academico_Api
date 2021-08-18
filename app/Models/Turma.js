'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {

    static getCamposCadastro(){
        return ['codigo',
                'turno',
                'professor_id',
                'diciplina_id',
                'sala_id',
                'semestre_id']
    }

    diciplina(){
        return this.belongsTo('App/Models/Diciplina')
    }

    professor(){
        return this.belongsTo('App/Models/Professor')
    }
    sala(){
        return this.belongsTo('App/Models/Sala')
    }
    semestre(){
        return this.belongsTo('App/Models/Semestre')
    }
    alunos(){
        return this.belongsToMany('App/Models/Aluno').pivotTable('turmas_alunos')
    }

    
}

module.exports = Turma
