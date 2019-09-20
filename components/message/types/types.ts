import { Document } from 'mongoose';

declare global {
  interface IMessages {
    chat: string;
    date: Date;
    fileUrl: string;
    message: string;
    user: string;
  }

  interface IMessageResMongo extends Document, IMessages { }
}
