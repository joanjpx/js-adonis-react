import Comment from 'App/Models/Comment'
import Factory from '@ioc:Adonis/Lucid/Factory'

/**
 * Comment Factory
  user_id
  post_id
  message
 */


export const CommentFactory = Factory
  .define(Comment, ({ faker }) => {
    return {
      user_id: faker.datatype.number({ min: 1, max: 10 }),
      post_id: faker.datatype.number({ min: 1, max: 200 }),
      message: faker.lorem.paragraph(),
    }
  })
  .build()