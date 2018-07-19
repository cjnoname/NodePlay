import * as express from 'express';
import { playController } from './controller';

const play = express.Router();

play.get('/api/play', (req, res) => playController(req, res));

export { play };
