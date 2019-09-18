import { Document } from 'mongoose';

declare global {
  interface IAddMessageRes {
    date: Date;
    message: string;
    user: string;
  }

  interface IAddMessageResMongo extends Document, IAddMessageRes { }
}
