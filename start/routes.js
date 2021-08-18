'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/alunos','AlunoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Aluno'],
    ]))

Route.resource('/cursos', 'CursoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Curso'],
    ]))

Route.resource('/diciplinas', 'DiciplinaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Diciplina'],
    ]))

Route.resource('/professores','ProfessorController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Professor'],
    ]))

Route.resource('/salas','SalaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Sala'],
    ]))

Route.resource('/semestres', 'SemestreController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Semestre'],
    ]))

Route.resource('/turmas','TurmaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Turma'],
    ]))

Route.resource('/turmas-alunos','TurmaAlunoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'TurmaAluno'],
    ]))


