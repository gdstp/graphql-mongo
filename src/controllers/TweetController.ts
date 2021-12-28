import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import Tweet from '../schemas/Tweet';
import MongoTweet from '../database/schemas/Tweet';

@Resolver(Tweet)
class TweetController {
  @Query((returns) => [Tweet], { name: 'tweets' })
  async find() {
    return await MongoTweet.find();
  }

  @Mutation((returns) => Tweet, { name: 'createTweet' })
  async create(
    @Arg('author') author: string,
    @Arg('description') description: string
  ) {
    return await MongoTweet.create({ author, description, likes: 0 });
  }
}

export default TweetController;
