import { UserFactory } from 'Database/factories/UserFactory';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class UserSeeder extends BaseSeeder {
  public async run () {

    await UserFactory.createMany(10);
    // console.log(UserFactory.createMany(10));

    // Write your database queries inside the run method
  }
}
