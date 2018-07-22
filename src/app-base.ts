import * as express from "express";
import "reflect-metadata";
import { initial } from "./initial";
import { decrpty } from "./decryptApp";
import { Container } from "../node_modules/inversify";
import { IShapeService } from "./interfaces/IShapeService";
import { InversifyExpressServer } from "../node_modules/inversify-express-utils";
import * as bodyParser from "body-parser";
import { ShapeService } from "./services/ShapeService";
import "./controllers/ShapeController";

const container = new Container();

container.bind<IShapeService>("IShapeService").to(ShapeService);
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static("static"));
  });

const app = server.build();

app.use(initial);
app.use(decrpty);

export default app;
