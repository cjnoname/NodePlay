interface Shape {
  area(): number;
  serialize(): string;
}

export class Rectangle implements Shape {
  public width: number = 0;
  public height: number = 0;

  public constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public area() {
    return this.width * this.height;
  }

  public serialize() {
    return JSON.stringify(this);
  }
}

export class Circle implements Shape {

  public radius: number = 0;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public area() {
    return this.radius * this.radius * Math.PI;
  }

  public serialize() {
    return JSON.stringify(this);
  }

}
