import { Request, Response } from "express";
import EmailService from "../services/emailService";

const users = [{ name: "daniel", email: "neto.daniribeiro@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Daniel Ribeiro",
        email: "neto.daniribeiro",
      },
      message: {
        subject: "Bem-vindo ao sistema",
        body: "Seja bem-vindo",
      },
    });

    return res.send();
  },
};
