namespace ISPSolution {
  interface Workable {
    work(): void;
  }

  interface Eatable {
    eat(): void;
  }

  class Human implements Workable, Eatable {
    work() {
      console.log("Human working");
    }

    eat() {
      console.log("Human eating");
    }
  }

  class Robot implements Workable {
    work() {
      console.log("Robot working");
    }
  }
}