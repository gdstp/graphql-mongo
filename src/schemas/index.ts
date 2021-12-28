import { buildSchema } from 'type-graphql';
import Tweet from './Tweet';
import User from './User';
import TweetController from '../controllers/TweetController';
import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const schema = async () =>
  await buildSchema({
    resolvers: [
      Tweet,
      TweetController,
      User,
      UserController,
      SessionController,
    ],
    authChecker: AuthMiddleware,
  });

export default schema;
