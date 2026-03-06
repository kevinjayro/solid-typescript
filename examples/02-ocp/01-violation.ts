namespace OCPViolation {
  class AreaCalculator {
    calculate(shape: string, size: number) {
      if (shape === "square") {
        return size * size;
      }

      if (shape === "circle") {
        return Math.PI * size * size;
      }

      return 0;
    }
  }
}