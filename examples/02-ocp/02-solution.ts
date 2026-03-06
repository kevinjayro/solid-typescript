namespace OCPSolution {
  interface Shape {
    area(): number;
  }

  class Square implements Shape {
    constructor(private size: number) {}

    area() {
      return this.size * this.size;
    }
  }

  class Circle implements Shape {
    constructor(private radius: number) {}

    area() {
      return Math.PI * this.radius * this.radius;
    }
  }

  class AreaCalculator {
    calculate(shape: Shape) {
      return shape.area();
    }
  }
}