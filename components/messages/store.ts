// Libraries
import to from 'await-to-js';
import mongoose from 'mongoose';

// Model
import MessageModel from './model';

// Const
const mongoUrl = 'mongodb+srv://jose:Jose920405123@cluster0-iykys.mongodb.net/test?retryWrites=true&w=majority'; // from `cloud.mongodb.com`
const mongoLocalUrl = 'mongodb://localhost:27017/boilerplate-bd';

const startMongoDbConnection = async () => {
  mongoose.Promise = global.Promise;
  const [error] = await to(mongoose.connect(mongoLocalUrl, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }));

  if (error) {
    // tslint:disable-next-line
    return console.error(error);
  }
  // tslint:disable-next-line
  console.log('MongoDb Connected Successfuly >>>>>>>>> ');
};

startMongoDbConnection();

// const list: IAddMessageRes[] = [];

const addMessages = async (message: IAddMessageRes) => {
  const myMessages = new MessageModel(message);
  const [error, response] = await to(myMessages.save());
  if (error) {
    throw error;
  }

  return response;
};

const getMessages = async () => {
  return await MessageModel.find();
};

const updateMessageText = async (id: string, newMessage: string) => {
  return await MessageModel.findOneAndUpdate({
    _id: id,
  }, {
    message: newMessage,
  }, { new: true });
};

export {
  addMessages,
  getMessages,
  updateMessageText,
};
