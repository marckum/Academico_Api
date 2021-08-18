'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Diciplina = use('App/Models/Diciplina')

/**
 * Resourceful controller for interacting with diciplinas
 */
class DiciplinaController {
  /**
   * Show a list of all diciplinas.
   * GET diciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Diciplina.all()
  }
  /**
   * Render a form to be used for creating a new diciplina.
   * GET diciplinas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new diciplina.
   * POST diciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
      const campos = Diciplina.getCamposCadrastro()
      const dados = request.only(campos)

      return await Diciplina.create(dados)
  }

  /**
   * Display a single diciplina.
   * GET diciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Diciplina.query()
                          .with('curso')
                          .with('turmas')
                          .where('id', params.id)
                          .first()
  }

  /**
   * Render a form to update an existing diciplina.
   * GET diciplinas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update diciplina details.
   * PUT or PATCH diciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const diciplina = await Diciplina.findOrFail(params.id)

    const campos = Diciplina.getCamposCadrastro()
    const dados = request.only(campos)

    diciplina.merge(dados)
    await diciplina.save()

    return diciplina


  }

  /**
   * Delete a diciplina with id.
   * DELETE diciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const diciplina = await Diciplina.findOrFail(params.id)
    return await diciplina.delete()

  }
}

module.exports = DiciplinaController
