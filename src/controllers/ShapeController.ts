import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import { Request, Response, NextFunction } from "express";
import { IShapeResponse } from "../models/shape/IShapeResponse";
import { IShapeService } from "../interfaces/IShapeService";

@controller("/api/shape")
export class ShapeController implements interfaces.Controller {

    constructor(
        @inject("IShapeService") private shapeService: IShapeService
    ) {
    }

    @httpGet("/")
    private index(req: Request, res: Response, next: NextFunction): IShapeResponse {
        return this.shapeService.getResult();
    }

    // @httpGet("/")
    // private list(@queryParam("start") start: number, @queryParam("count") count: number): string {
    //     return this.fooService.get(start, count);
    // }

    // @httpPost("/")
    // private async create(@request() req: Request, @response() res: Response) {
    //     try {
    //         await this.fooService.create(req.body);
    //         res.sendStatus(201);
    //     } catch (err) {
    //         res.status(400).json({ error: err.message });
    //     }
    // }

    // @httpDelete("/:id")
    // private delete(@requestParam("id") id: string, @response() res: Response): Promise<void> {
    //     return this.fooService.delete(id)
    //         .then(() => res.sendStatus(204))
    //         .catch((err: Error) => {
    //             res.status(400).json({ error: err.message });
    //         });
    // }
}
