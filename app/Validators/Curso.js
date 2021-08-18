'use strict'

const ValidatorAbstract = use ('App/Validator/ValidatorAbstratc')

class Curso extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:40|min:3'

    }
  }
}

module.exports = Curso
