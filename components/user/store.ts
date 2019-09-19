// Libraries
// import to from 'await-to-js';

// Model
import UserModel from './model';

export const addUser = async (user: IUser) => {
  const myUser = new UserModel(user);
  return myUser.save();
};

export const getUser = async (filterName: string) => {
  return await UserModel.find(filterName && { name: filterName });
};
