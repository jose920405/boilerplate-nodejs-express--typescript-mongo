import bodyParser from 'body-parser';
import express from 'express';

// Router
import router from './helpers/routes';

const app = express();
app.use(bodyParser.json());
router(app);

// Consts
const port = 3000;

app.use('/app', express.static('public'));

app.listen(port, () => {
  // tslint:disable-next-line
  console.log(`This app is listening in ${port}.. Go to => http://localhost:${port}`);
});
