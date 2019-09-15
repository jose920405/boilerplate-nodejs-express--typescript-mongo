interface addMessageRes {
  user: string;
  message: string;
  date: Date;
}

const addMessage = (user: string, message: string): Promise<addMessageRes> => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      return reject('Data is not correct');
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    resolve(fullMessage);
  });
}

export {
  addMessage
};
