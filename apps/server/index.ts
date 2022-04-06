import express from 'express';
import { json } from 'express';
import cors from 'cors';
import { doToC } from '@libs/c_lib/do_c';
import {
  HelloService,
  HelloServiceImpl,
} from '@apps/server/services/hello_service';

console.log('Starting server...');

const app = express();

const helloService: HelloService = new HelloServiceImpl();

app.use(cors({ methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }), json);

app.get('/', (_, res) => {
  res.status(200).json('Hello, World!');
});

app.get('/health-check', (req, res) => {
  res
    .status(200)
    .json({ message: '✅ The app is currently healthy!', healthy: true });
});

app.get('/hello', (req, res) => {
  const { name } = req.query;
  if (!name || typeof name != 'string') {
    return res.status(400).json({ error: 'BAD REQUEST' });
  }
  return res.status(200).json(helloService.sayHello(name));
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name != 'string') {
    return res.status(400).json({ error: 'BAD REQUEST' });
  }
  res.status(200).json(helloService.sayHello(name));
});

app.get('c_lib', (req, res) => {
  const skip = req.query.skip !== undefined;
  res.status(200).json({ result: doToC(skip) });
});

app.listen(4000, () => console.log('Server started at https://localhost:4000'));
