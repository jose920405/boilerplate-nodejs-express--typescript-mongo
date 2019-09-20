// Libraries
import to from 'await-to-js';
import mongoose from 'mongoose';

// Config
import config from './config';

// Const
// const mongoUrl = config.DB_CLOUD_URL;
const mongoLocalUrl = config.DB_URL;

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
