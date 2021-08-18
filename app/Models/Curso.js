'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {
    
    static getCamposCadastro(){
        return ['nome', 
                'duracao']
    }

    diciplinas(){
        return this.hasMany('App/Models/Diciplina')
    }
}

module.exports = Curso
