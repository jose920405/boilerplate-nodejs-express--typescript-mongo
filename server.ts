import bodyParser from 'body-parser';
import cors from 'cors';
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

// Cors for enable request from frontend
// app.use(cors()); // Uncoment to prevent CROSS ORIGIN problems.

// Socket Connection
socketHelper.connect(server);

app.use('/app', express.static('public'));

server.listen(port, () => {
  // tslint:disable-next-line
  console.log(`This app is listening in ${port}.. Go to => http://localhost:${port}`);
});
