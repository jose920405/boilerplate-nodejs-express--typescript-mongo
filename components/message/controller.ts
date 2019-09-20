// Libraries
import to from 'await-to-js';

// Config
import config from '../../config';

import * as socketHelper from '../../helpers/socket';
import * as store from './store';

export const addMessage = async (user: string, chat: string, message: string, file: Express.Multer.File): Promise<any> => {
  if (!user || !message) {
    throw {
      message: 'Data is not correct',
    };
  }

  let fileUrl = '';
  if (file) {
    fileUrl = `${config.HOST}:${config.PORT}/${config.PUBLIC_ROUTE}/${config.FILES_ROUTE}/${file.filename}`;
  }

  const fullMessage: IMessages = {
    chat,
    date: new Date(),
    fileUrl,
    message,
    user,
  };

  const [error, response] = await to(store.addMessages(fullMessage));
  if (error) {
    throw {
      message: error || 'Error Saving Message in BD',
    };
  }

  if (socketHelper.socket && socketHelper.socket.io) {
    socketHelper.socket.io.emit('message', response);
  }

  return response;
};

export const getMessages = async (query: IMessages) => {
  return store.getMessages(query);
};

export const updateMessage = async (id: string, newMessage: string) => {
  if (!id || !newMessage) {
    throw {
      message: !id ? 'Invalid id to update' : !newMessage && 'Invalid message to update',
    };
  }

  return store.updateMessageText(id, newMessage);
};

export const deleteMessage = async (id: string) => {
  if (!id) {
    throw {
      message: 'Id not provided',
    };
  }

  return store.deleteMessageText(id);
};
