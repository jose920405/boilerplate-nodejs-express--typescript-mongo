// Libraries
import to from 'await-to-js';
import { isArray } from 'lodash';

import * as store from './store';

export const addChat = async (users: IUser[]): Promise<any> => {
  if (!users || !isArray(users) || users.length === 0) {
    throw {
      message: 'Users are missing',
    };
  }

  const chat: IChat = {
    users,
  };

  const [error, response] = await to(store.addChat(chat));
  if (error) {
    throw {
      message: error || 'Error Saving User in BD',
    };
  }

  return response;
};

export const getChat = async (userId: string) => {
  return store.getChat(userId);
};
