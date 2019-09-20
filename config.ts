const config = {
  DB_CLOUD_URL: 'mongodb+srv://jose:Jose920405123@cluster0-iykys.mongodb.net/test?retryWrites=true&w=majority', // from `cloud.mongodb.com`
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/boilerplate-bd',
  FILES_ROUTE: process.env.FILES_ROUTE || 'files',
  HOST: process.env.HOST || 'http://localhost',
  PORT: process.env.PORT || 3000,
  PUBLIC_ROUTE: process.env.PUBLIC_ROUTE || 'app',
};

export default config;
