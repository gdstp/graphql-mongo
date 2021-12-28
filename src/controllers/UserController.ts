import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import User from '../schemas/User';
import MongoUser from '../database/schemas/User';
import * as bcrypt from 'bcryptjs';

@Resolver(User)
class UserController {
  @Query((returns) => [User], { name: 'users' })
  async find() {
    return await MongoUser.find();
  }

  @Mutation((returns) => User, { name: 'createUser' })
  async create(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Arg('name') name: string
  ) {
    const hashPassword = await bcrypt.hash(password, 8);
    return await MongoUser.create({
      username,
      password: hashPassword,
      name,
    });
  }
}

export default UserController;
