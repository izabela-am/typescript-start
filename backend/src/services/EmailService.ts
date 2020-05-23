interface IMailTo {
    name: string;
    email: string;
}

interface IMessage {
    subject: string;
    content: string;
    attachment?: Array<string>;
}

interface IMessageDTO {
    to: IMailTo;
    message: IMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail( { to, message }: IMessageDTO) {
        console.log(`Email sent to ${to.name}: ${message.subject}`)
    }
}

export default EmailService;