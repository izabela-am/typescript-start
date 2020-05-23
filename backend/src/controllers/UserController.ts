import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {
        name: 'Izabela',
        email: 'izabela@teste.com'
    }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: { 
                name: 'Izabela', 
                email: 'izabela@teste.com' 
            },
            message: { 
                subject: 'Welcome!', 
                content: 'Welcome to our team'
            }
        });
    }
};