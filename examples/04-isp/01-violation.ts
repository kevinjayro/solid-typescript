namespace ISPViolation {
  interface Worker {
    work(): void;
    eat(): void;
  }

  class Robot implements Worker {
    work() {
      console.log("Robot working");
    }

    eat() {
      throw new Error("Robot can't eat");
    }
  }
}