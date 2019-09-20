import { Server } from 'http';
import socketio from 'socket.io';

const socket: ISocketObj = { // As reference is always updated
  io: null,
};

const connect = (server: Server) => {
  socket.io = socketio(server);
};

export {
  connect,
  socket,
};
