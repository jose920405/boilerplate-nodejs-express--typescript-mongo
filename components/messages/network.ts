import { Router } from 'express';

import { errorRes, successRes } from '../../network/response';
import { addMessage } from './controller';

// Router
const router = Router();

router.get('/', (req, res) => {
  successRes(req, res, 200, 'Messages Getted');
});

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const messageResponse = await addMessage(body.user, body.message);
    successRes(req, res, 201, messageResponse);
  } catch (error) {
    console.log('19 error >>> ', error);
    errorRes(req, res, 400, error);
  }
});

export default router;