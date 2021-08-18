'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Diciplina extends Model {

    static getCamposCadastro(){
        return ['nome', 
                'duracao', 
                'curso_id']
    }

    curso(){
        return this.belongsTo('App/Models/Curso')
    }

    turmas(){
        return this.hasMany ('App/Models/Turma')
    }
}

module.exports = Diciplina
