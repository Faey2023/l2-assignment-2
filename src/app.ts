'use strict';

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './module/product/product.router';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

console.log(process.cwd());

export default app;
