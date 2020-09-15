interface Imailto {
  name: string;
  email: string;
}

interface Imailmessage {
  subject: string;
  body: string;
  attarchment?: string[];
}

interface IMessageDTO {
  to: Imailto;
  message: Imailmessage;
}

interface ImailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements ImailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
