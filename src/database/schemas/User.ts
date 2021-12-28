import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
  _id?: string;
  username: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IUserDocument extends Document {
  username: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    username: String,
    password: String,
    name: String,
    createdAt: {
      type: Date,
      default: new Date(Date.now()),
      required: false,
    },
    updatedAt: {
      type: Date,
      default: new Date(Date.now()),
      required: false,
    },
  },
  {
    timestamps: {},
  }
);

const model = mongoose.model('User', UserSchema);

export default model;
