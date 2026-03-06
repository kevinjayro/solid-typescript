namespace LSPSolution {
  class Bird {}

  class FlyingBird extends Bird {
    fly() {
      console.log("Flying");
    }
  }

  class Sparrow extends FlyingBird {}

  class Penguin extends Bird {
    swim() {
      console.log("Swimming");
    }
  }
}