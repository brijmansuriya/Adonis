// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index() {
        
        return [
          {
            id: 1,
            title: 'Hello world',
          },
          {
            id: 2,
            title: 'Hello universe',
          },
        ]
      }


}
