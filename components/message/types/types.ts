import { Document } from 'mongoose';

declare global {
  interface IMessages {
    chat: string;
    date: Date;
    message: string;
    user: string;
  }

  interface IMessageResMongo extends Document, IMessages { }
}
