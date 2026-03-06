namespace SRPViolation {
  class UserManager {
    createUser(name: string) {
      console.log("User created:", name);
    }

    saveToDatabase(name: string) {
      console.log("Saving user to database:", name);
    }

    sendWelcomeEmail(name: string) {
      console.log("Sending welcome email to:", name);
    }
  }
}