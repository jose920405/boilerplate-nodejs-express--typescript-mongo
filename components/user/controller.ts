// Libraries
import to from 'await-to-js';

import * as store from './store';

export const addUser = async (name: string): Promise<any> => {
  if (!name) {
    throw {
      message: 'Name is missing',
    };
  }

  const fullUser: IUser = {
    name,
  };

  const [error, response] = await to(store.addUser(fullUser));
  if (error) {
    throw {
      message: error || 'Error Saving User in BD',
    };
  }
  return response;
};

export const getUsers = async (filterName: string) => {
  return store.getUser(filterName);
};
