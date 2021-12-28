import { Field, ID, ObjectType } from 'type-graphql';
import { IUser } from '../database/schemas/User';

@ObjectType()
class User implements IUser {
  @Field((type) => ID, { nullable: true })
  _id: any;

  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  createdAt?: Date | undefined;

  @Field({ nullable: true })
  updatedAt?: Date | undefined;
}

export default User;
