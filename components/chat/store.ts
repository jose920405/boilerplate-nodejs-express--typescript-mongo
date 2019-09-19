// Libraries
// import to from 'await-to-js';

// Model
import ChatModel from './model';

export const addChat = async (chat: IChat) => {
  const myUser = new ChatModel(chat);
  return myUser.save();
};

export const getChat = async (userId: string) => {
  return new Promise((resolve, reject) => {
    ChatModel.find(userId && { users: userId })
      .populate('users')
      .exec((error, res) => {
        if (error) {
          return reject(error);
        }
        resolve(res);
      });
  });
  // return await ChatModel.find(userId && { name: userId });
};
