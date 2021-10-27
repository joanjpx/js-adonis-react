import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
  public async index ({}: HttpContextContract) {

    const users = await User.all()
    // return users.map((user) => user.toJSON());
    return users.map((user) => user.toJSON());
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ( {request, response} : HttpContextContract) {

    const { name, email, password } = request.all();

    let user = await User.create({
      name: name,
      email: email,
      password: password
    }).then(user => {

      console.log(user.name);

      return response.send(user);

    }).catch(error => {

      console.log(error);

      // return error;
    });

    // return response.send({'Message':"Success", "Data": user.toJSON()});

  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
