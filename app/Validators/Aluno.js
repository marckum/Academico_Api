'use strict'

const ValidatorAbstract = use ('App/Validator/ValidatorAbstratc')

class Aluno extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:10',
      cpf: 'integer',
      data_nacimento: 'date',
      matricula: 'required|max:10',
      email: 'email',
      telefone: 'required',
      cep: 'min:8|max:8',
      logradouro: 'max:100',
      bairro: 'max:100',
      uf: 'min:2|max:2',
      municipio: 'integer'     

      
    }
  }
}

module.exports = Aluno
