'use strict'

const ValidatorAbstract = use ('App/Validator/ValidatorAbstratc')

class Diciplina extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:25|min:10'

    }
  }
}

module.exports = Diciplina
