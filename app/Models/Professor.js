'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professor extends Model {

    static get table(){
        return 'professores'
    }
    
    static getCamposCadastro(){
        return ['nome', 
                'cpf', 
                'matricula', 
                'salario', 
                'email', 
                'telefone']
    }

    turmas(){
        return this.hasMany('App/Models/Turma')
    }
}

module.exports = Professor
