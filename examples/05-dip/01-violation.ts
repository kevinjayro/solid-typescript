namespace DIPViolation {
  class EmailService {
    send(message: string) {
      console.log("Sending email:", message);
    }
  }

  class Notification {
    private email = new EmailService();

    notify(message: string) {
      this.email.send(message);
    }
  }
}