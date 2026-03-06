namespace SRPSolution {
  class UserService {
    createUser(name: string) {
      console.log("User created:", name);
    }
  }

  class UserRepository {
    save(name: string) {
      console.log("Saving user to database:", name);
    }
  }

  class EmailService {
    sendWelcomeEmail(name: string) {
      console.log("Sending welcome email to:", name);
    }
  }
}