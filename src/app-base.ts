import * as express from 'express';
import { initial } from './initial';
import { decrpty } from './decryptApp';
import { play } from './play';

const app = express();

app.use(initial);
app.use(play);
app.use(decrpty);

export default app;
