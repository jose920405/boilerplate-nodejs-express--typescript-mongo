import express from 'express';
import bodyParser from 'body-parser';

// Router
import router from './network/routes';

const app = express();
app.use(bodyParser.json());
router(app);

// Consts
const port = 3000;

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log(`This app is listening in ${port}.. Go to => http://localhost:${port}`);
});