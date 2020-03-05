import {Request, Response} from 'express';
import EmailService from '../services/EmailServices';

const users = [
  { name:'Caio', email:'caiocaprio@gmail.com' },
]

export default {
  async index(req: Request, res: Response){
    return res.json(users);
  },

  async create(req: Request, res: Response){
    const emailService = new EmailService();
  
    emailService.sendMail({
      to: {name:'Caio', email:'caiocaprio@nextel.com.br'},
      message: { subject: 'Bem vindo',body:'Seja bem-vindo' }
    })

    return res.json();
  }
}