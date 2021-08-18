'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TurmaAluno = use('App/Models/TurmaAluno')

/**
 * Resourceful controller for interacting with turmaalunos
 */
class TurmaAlunoController {
  /**
   * Show a list of all turmaalunos.
   * GET turmaalunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let (page, perPage) = request.all()
    return Curso.query().pageInate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new turmaaluno.
   * GET turmaalunos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new turmaaluno.
   * POST turmaalunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
      const campos = TurmaAluno.getCamposCadrastro()
      const dados = request.only(campos)

      return await TurmaAluno.create(dados)
  }

  /**
   * Display a single turmaaluno.
   * GET turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await TurmaAluno.query()
                           .where('id', params.id)
                           .first()
  }

  /**
   * Render a form to update an existing turmaaluno.
   * GET turmaalunos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update turmaaluno details.
   * PUT or PATCH turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const turmaaluno = await TurmaAluno.findOrFail(params.id)

    const campos = TurmaAluno.getCamposCadrastro()
    const dados = request.only(campos)

    turmaaluno.merge(dados)
    await turmaaluno.save()

    return turmaaluno


  }

  /**
   * Delete a turmaaluno with id.
   * DELETE turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const turmaaluno = await TurmaAluno.findOrFail(params.id)
    return await turmaaluno.delete()

  }
}

module.exports = TurmaAlunoController
