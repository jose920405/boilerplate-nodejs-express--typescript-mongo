import { Request, Response } from 'express';

export const successRes = (req: Request, res: Response, customMessage: any, status: number = 200) => {
  res.status(status).send({
    error: null,
    response: customMessage,
  });
};

export const errorRes = (req: Request, res: Response, customMessage: string, status: number = 500) => {
  res.status(status).send({
    error: true,
    response: customMessage,
  });
};
