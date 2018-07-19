import { Request, Response } from 'express';
import { Rectangle, Circle } from '../models/shape2';

// export const playController = (req: Request, res: Response) => {
//   const rectangle = new Rectangle(1, 5);
//   const circle = new Circle(5);
//   const result = getArea([rectangle, circle]);
//   res.send({ result });
// };

export const playController = (req: Request, res: Response) => {
  const rectangle = new Rectangle(1, 5);
  const circle = new Circle(5);
  const result = {
    aa: rectangle.serialize(),
    bb: circle.serialize()
  };
  res.send({ result });
};
