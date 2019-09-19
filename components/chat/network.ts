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
  const filterChat = req.query.userId || null;
  const [error, usersList] = await to(controller.getChat(filterChat));
  if (error) {
    return helperResponse.errorRes(req, res, error);
  }

  return helperResponse.successRes(req, res, usersList);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const [error, userResponse] = await to(controller.addChat(body.users));
  if (error) {
    return helperResponse.errorRes(req, res, error, 400);
  }

  return helperResponse.successRes(req, res, userResponse, 201);
});

export default router;
