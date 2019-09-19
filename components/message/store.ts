// Libraries
import to from 'await-to-js';

// Model
import MessageModel from './model';

export const addMessages = async (message: IMessages) => {
  const myMessages = new MessageModel(message);
  const [error, response] = await to(myMessages.save());
  if (error) {
    throw error;
  }

  return response;
};

export const getMessages = async (filterUser: IMessages) => {
  return new Promise((resolve, reject) => {
    MessageModel.find(filterUser)
      .populate('user')
      .populate({
        path: 'chat',
        populate: {
          path: 'users',
        },
      })
      .exec((error, res) => {
        if (error) {
          return reject(error);
        }
        resolve(res);
      });
  });
};

export const updateMessageText = async (id: string, newMessage: string) => {
  return await MessageModel.findOneAndUpdate({
    _id: id,
  }, {
    message: newMessage,
  }, { new: true });
};

export const deleteMessageText = async (id: string): Promise<IDeleteMongoRes> => {
  return await MessageModel.deleteOne({
    _id: id,
  });
};
