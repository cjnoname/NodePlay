import { IShapeService } from "../interfaces/IShapeService";
import { IShapeResponse } from "../models/shape/IShapeResponse";
import { injectable } from "inversify";

@injectable()
export class ShapeService implements IShapeService {
    public getResult() {
        const res: IShapeResponse = {
            circle: "123",
            rectangle: "456"
        };
        return res;
    }
}
