// Libraries
import to from 'await-to-js';

import * as store from './store';

const addMessage = async (user: string, message: string): Promise<any> => {
  if (!user || !message) {
    throw {
      message: 'Data is not correct',
    };
  }

  const fullMessage = {
    date: new Date(),
    message,
    user,
  };

  const [error, response] = await to(store.addMessages(fullMessage));
  if (error) {
    throw {
      message: error || 'Error Saving Message in BD',
    };
  }
  return response;
};

const getMessages = async () => {
  return store.getMessages();
};

const updateMessage = async (id: string, newMessage: string) => {
  if (!id || !newMessage) {
    throw {
      message: !id ? 'Invalid id to update' : !newMessage && 'Invalid message to update',
    };
  }

  return store.updateMessageText(id, newMessage);
};

export {
  addMessage,
  getMessages,
  updateMessage,
};
