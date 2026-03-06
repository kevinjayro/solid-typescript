namespace LSPViolation {
  class Bird {
    fly() {
      console.log("Flying");
    }
  }

  class Penguin extends Bird {
    fly() {
      throw new Error("Penguins can't fly");
    }
  }
}