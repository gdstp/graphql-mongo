import { Arg, Query, Resolver } from 'type-graphql';
import User from '../schemas/User';
import MongoUser from '../database/schemas/User';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Resolver(User)
class SessionController {
  @Query((returns) => String, { name: 'login' })
  async find(
    @Arg('username') username: string,
    @Arg('password') password: string
  ) {
    const user = await MongoUser.findOne().where({ username });
    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new Error('Password does not match');
    }

    const token = jwt.sign({}, 'secret', {
      subject: user.id,
      expiresIn: 7,
    });

    return token;
  }
}

export default SessionController;
