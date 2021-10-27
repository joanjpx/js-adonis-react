import Post from 'App/Models/Post'
import Factory from '@ioc:Adonis/Lucid/Factory'

/**
 * Define a factory for a user post.
    user_id
    title
    message
    image
 */


export const PostFactory = Factory
  .define(Post, ({ faker }) => {
    return {
      user_id: faker.datatype.number({ min: 1, max: 10 }),
      title: faker.lorem.sentence(),
      message: faker.lorem.paragraph(),
      image: faker.internet.url(),
    }
  })
  .build()