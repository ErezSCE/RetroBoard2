import express, { Request, Response } from 'express';
import http from 'http';
import mongoose from 'mongoose';
import columnRouter from './routes/columns';
import { initSocket } from './socket';

const app = express();
app.use(express.json());

app.use('/columns', columnRouter);

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

const server = http.createServer(app);
// Initialize Socket.io with the HTTP server
initSocket(server);

const PORT = process.env.PORT ?? 3000;
if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
  });
}

export default app;
