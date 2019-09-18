// Libraries
import to from 'await-to-js';
import { Router } from 'express';

// Helpers
import * as helperResponse from '../../helpers/response';

// Controller
import * as controller from './controller';

// Router
const router = Router();

router.get('/', async (req, res) => {
  const [error, messagesList] = await to(controller.getMessages());
  if (error) {
    return helperResponse.errorRes(req, res, error);
  }

  return helperResponse.successRes(req, res, messagesList);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const [error, messageResponse] = await to(controller.addMessage(body.user, body.message));
  if (error) {
    return helperResponse.errorRes(req, res, error, 400);
  }

  return helperResponse.successRes(req, res, messageResponse, 201);
});

router.patch('/:id', async (req, res) => {
  const recordId = req.params.id;
  const body = req.body;
  const [error, messageResponse] = await to(controller.updateMessage(recordId, body.message));
  if (error) {
    return helperResponse.errorRes(req, res, error, 400);
  }

  return helperResponse.successRes(req, res, messageResponse, 201);
});

export default router;
