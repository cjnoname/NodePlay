import * as express from 'express';
import { config, DotenvResult } from 'dotenv';

const dotenvResult: DotenvResult = config();

const decrypt = JSON.parse(dotenvResult.parsed!.decrypt);

const initial = express.Router();

initial.use(express.static('static'));
initial.use(express.json());

export { initial, decrypt };
