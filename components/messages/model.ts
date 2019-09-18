import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mySchema = new Schema({
  date: {
    required: true,
    type: Date,
  },
  message: {
    required: true,
    type: String,
  },
  user: {
    required: true,
    type: String,
  },
});

export default mongoose.model<IAddMessageResMongo>('Message', mySchema);
