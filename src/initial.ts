import * as express from "express";
import { config, DotenvResult } from "dotenv";

const dotenvResult: DotenvResult = config();

const decrypt = JSON.parse(dotenvResult.parsed!.decrypt);

const initial = express.Router();

export { initial, decrypt };
