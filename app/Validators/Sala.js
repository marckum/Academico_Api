'use strict'

const ValidatorAbstract = use ('App/Validator/ValidatorAbstratc')

class Sala extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:30|min:1',
      tipo: 'required|max:1|min:1'
    }
  }
}

module.exports = Sala
