import http from 'http';
import express from 'express';
import SocketIO from 'socket.io';

const app = express();
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.url);
  res.send('HelloWorld');
});

const socketServer = http.createServer(express);
const io = SocketIO(socketServer);
socketServer.listen(3001);

io.on('connection', (socket) => {
  socket.on('client-to-server', (message: string) => {
    io.emit('server-to-client', message);
  });
});

app.use('/v1', router);

export default {
  path: '/api',
  handler: app
};
