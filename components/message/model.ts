import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
  chat: {
    ref: 'Chat',
    type: Schema.Types.ObjectId,
  },
  date: {
    required: true,
    type: Date,
  },
  message: {
    required: true,
    type: String,
  },
  user: {
    ref: 'User',
    required: true,
    type: Schema.Types.ObjectId,
  },
});

export default mongoose.model<IMessageResMongo>('Message', mySchema);
