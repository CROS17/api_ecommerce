import express from 'express';
import cors from 'cors';
import routerApi from './src/routes/index.js';
import { logErrors, errorHandler, boomErrorHandler }  from './src/middlewares/error.handler.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Api-Ecommerce-Music');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port: ' +  port);
});
