import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
  users: [{
    ref: 'User',
    type: Schema.Types.ObjectId,
  }],
});

export default mongoose.model<IMessageResMongo>('Chat', mySchema);
