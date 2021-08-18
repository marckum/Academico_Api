'use strict'

const ValidatorAbstract = use ('App/Validator/ValidatorAbstratc')

class Turma extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      codigo:'required|max:10|min:10',
      turno: 'required|max:1',
      professor_id:'required|integer|max:1 ',
      diciplina_i:'required|integer|max:1 ',
      sala_id:'required|integer|max:1 ',
      semestre_id:'required|integer|max:1 ',
      
    }
  }
}

module.exports = Turma
