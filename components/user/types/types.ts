import { Document } from 'mongoose';

declare global {
  interface IUser {
    name: string;
  }

  interface IAddUserResMongo extends Document, IUser { }
}
