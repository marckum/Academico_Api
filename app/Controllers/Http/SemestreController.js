'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Semestre = use('App/Models/Semestre')

/**
 * Resourceful controller for interacting with semestres
 */
class SemestreController {
  /**
   * Show a list of all semestres.
   * GET semestres
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
   * Render a form to be used for creating a new semestre.
   * GET semestres/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new semestre.
   * POST semestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
      const campos = Semestre.getCamposCadrastro()
      const dados = request.only(campos)

      return await Semestre.create(dados)
  }

  /**
   * Display a single semestre.
   * GET semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Semestre.query()
                         .with('turmas')
                         .where('id', params.id)
                         .first()
  }

  /**
   * Render a form to update an existing semestre.
   * GET semestres/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update semestre details.
   * PUT or PATCH semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const semestre = await Semestre.findOrFail(params.id)

    const campos = Semestre.getCamposCadrastro()
    const dados = request.only(campos)

    semestre.merge(dados)
    await semestre.save()

    return semestre


  }

  /**
   * Delete a semestre with id.
   * DELETE semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const semestre = await Semestre.findOrFail(params.id)
    return await semestre.delete()

  }
}

module.exports = SemestreController
