'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Aluno = use('App/Models/Aluno')

/**
 * Resourceful controller for interacting with alunos
 */
class AlunoController {
  /**
   * Show a list of all alunos.
   * GET alunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let (page, perPage) = request.all()
    return Aluno.query().pageInate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new aluno.
   * GET alunos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new aluno.
   * POST alunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
      const campos = Aluno.getCamposCadrastro()
      const dados = request.only(campos)

      return await Aluno.create(dados)
  }

  /**
   * Display a single aluno.
   * GET alunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Aluno.query()
                      .with('turmas')
                      .where('id', params.id)
                      .first()
  }

  /**
   * Render a form to update an existing aluno.
   * GET alunos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update aluno details.
   * PUT or PATCH alunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id)

    const campos = Aluno.getCamposCadrastro()
    const dados = request.only(campos)

    aluno.merge(dados)
    await aluno.save()

    return aluno


  }

  /**
   * Delete a aluno with id.
   * DELETE alunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id)
    return await aluno.delete()

  }
}

module.exports = AlunoController
