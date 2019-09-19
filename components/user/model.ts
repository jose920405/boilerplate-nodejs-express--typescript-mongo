import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
});

export default mongoose.model<IMessageResMongo>('User', mySchema);
