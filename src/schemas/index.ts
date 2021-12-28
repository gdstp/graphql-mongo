import { buildSchema } from 'type-graphql';
import Tweet from './Tweet';
import User from './User';
import TweetController from '../controllers/TweetController';
import UserController from '../controllers/UserController';

const schema = async () =>
  await buildSchema({
    resolvers: [Tweet, TweetController, User, UserController],
  });

export default schema;
