import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';

// Utils
import router from './helpers/routes';
import * as socketHelper from './helpers/socket';

// Db
import db from './db';

// Consts
const port = 3000;

// Express connection
const app = express();
app.use(bodyParser.json());

// Node Server initializing
const server = new http.Server(app);

// Db Connection
db();

// Routing Manage
router(app);

// Socket Connection
socketHelper.connect(server);

app.use('/app', express.static('public'));

server.listen(port, () => {
  // tslint:disable-next-line
  console.log(`This app is listening in ${port}.. Go to => http://localhost:${port}`);
});
