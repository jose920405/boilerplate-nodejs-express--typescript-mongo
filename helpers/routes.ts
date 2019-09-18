import express from 'express';

import messages from '../components/messages/network';

const routes = (app: ReturnType<typeof express>) => {
  app.use('/messages', messages);
};

export default routes;
