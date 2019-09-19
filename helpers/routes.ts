import { Application } from 'express';

import chat from '../components/chat/network';
import message from '../components/message/network';
import user from '../components/user/network';

const routes = (app: Application) => {
  app.use('/messages', message);
  app.use('/users', user);
  app.use('/chats', chat);
};

export default routes;
