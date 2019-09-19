// Libraries
import to from 'await-to-js';
import mongoose from 'mongoose';

// Const
const mongoUrl = 'mongodb+srv://jose:Jose920405123@cluster0-iykys.mongodb.net/test?retryWrites=true&w=majority'; // from `cloud.mongodb.com`
const mongoLocalUrl = 'mongodb://localhost:27017/boilerplate-bd';

mongoose.Promise = global.Promise;

const connect = async () => {
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

export default connect;
