import { CommentFactory } from 'Database/factories/CommentFactory';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class CommentSeeder extends BaseSeeder {
  public async run () {

    await CommentFactory.createMany(500);
    // Write your database queries inside the run method
  }
}
