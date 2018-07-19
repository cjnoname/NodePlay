interface RectangleInterface extends Shape {
  width: number;
  height: number;
}

interface CircleInterface extends Shape  {
  radius: number;
}

interface Shape extends Serializable {
  area(): number;
}

interface Serializable {
  serialize(): string;
}

class Rectangle implements RectangleInterface, Shape {
  public width: number = 0;
  public height: number = 0;

  public area() {
      return this.width * this.height;
  }

  public serialize(): string {
    throw new Error('Method not implemented.');
  }
}

class Circle implements CircleInterface {
  public radius: number = 0;

  public area() {
      return this.radius * this.radius * Math.PI;
  }

  public serialize(): string {
    throw new Error('Method not implemented.');
  }
}

function getArea(shapes: Shape[]) {
  return shapes.reduce(
      (previous, current) => previous + current.area(),
      0
  );
}
