import { Document } from 'mongoose';

declare global {
  interface IChat {
    users: IUser[];
  }

  interface IChatResMongo extends Document, IChat { }
}
