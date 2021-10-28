import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Hash from '@ioc:Adonis/Core/Hash';


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

    const hashedPassword = await Hash.make(password);

    await User.create({
      name: name,
      email: email,
      password: hashedPassword
    }).then(user => {

      // console.log(user.name);

      return response
        .status(201)
        .json({"Message":"Successfully Created", "Data": user});

    }).catch(error => {

      return response
        .status(500)
        .json({"Message": "Error", "Error": error.sqlMessage});   
    });

    // return response.send({'Message':"Success", "Data": user.toJSON()});

  }

  /**
   * 
   * Display Specified Resource by Id
   */

  public async show ({ request, response}: HttpContextContract) {

    const { id } = request.params();

    const user = await User.find(id);

    if(!user) {
      
      return response
        .status(404)
        .json({"Message": "User not found"});
    }

    return response
      .status(200)
      .json({"Message": "Successfully Returned", "Data": user.toJSON()});
  }
    


  

  public async edit ({}: HttpContextContract) {
  }

  /**
   * Update a Resource
   */

  public async update ({request, response}: HttpContextContract) {

    const { id } = request.params();

    const user = await User.find(id);

    if(!user) {
      
      return response
        .status(404)
        .json({"Message": "User not found"});
    }

    const { name, email, password } = request.all();

    user.name = name;
    user.email = email;
    user.password = password;

    await user.save();

    return response
      .status(200)
      .json({"Message": "Successfully Updated", "Data": user.toJSON()});
  }

  /**
   * Destroy a Resource
   * 
   */
  public async destroy ({request, response}: HttpContextContract) {

    const { id } = request.params();

    const user = await User.find(id);

    if(!user) {
      
      return response
        .status(404)
        .json({"Message": "User not found"});
    }

    await user.delete();

    return response
      .status(200)
      .json({"Message": "Success"});

  }
}
