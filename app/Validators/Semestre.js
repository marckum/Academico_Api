'use strict'

const ValidatorAbstract = use ('App/Validator/ValidatorAbstratc')

class Semestre extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome:'required|max:30',
      data_inicio:'required|date',
      data_fim:'required|date'
    }
  }
}

module.exports = Semestre
