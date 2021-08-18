'use strict'

const ValidatorAbstract = use ('App/Validator/ValidatorAbstratc')

class Professor extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:10',
      cpf: 'integer|required',
      matricula: 'required|max:10',
      salrio: 'integer',
      email: 'email|max:100',
      telefone: 'required|max:15|min:13',
    }
  }
}

module.exports = Professor
