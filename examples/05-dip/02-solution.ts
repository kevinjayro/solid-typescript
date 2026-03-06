namespace DIPSolution {
  interface MessageService {
    send(message: string): void;
  }

  class EmailService implements MessageService {
    send(message: string) {
      console.log("Sending email:", message);
    }
  }

  class Notification {
    constructor(private service: MessageService) {}

    notify(message: string) {
      this.service.send(message);
    }
  }
}