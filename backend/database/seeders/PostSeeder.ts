import { PostFactory } from 'Database/factories/PostFactory';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class PostSeeder extends BaseSeeder {
  public async run () {
    await PostFactory.createMany(200);
    // Write your database queries inside the run method
  }
}
