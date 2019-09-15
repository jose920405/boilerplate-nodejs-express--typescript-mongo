import { Response, Request } from 'express';

export const successRes = (req: Request, res: Response, status: number, customMessage: any) => {
  res.status(status || 200).send({
    error: null,
    response: customMessage
  });
}

export const errorRes = (req: Request, res: Response, status: number, customMessage: string) => {
  res.status(status || 500).send({
    error: true,
    response: customMessage
  });
}