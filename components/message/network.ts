// Libraries
import to from 'await-to-js';
import { Router } from 'express';
import multer from 'multer';

// Helpers
import * as helperResponse from '../../helpers/response';

// Controller
import * as controller from './controller';

// Config
import config from '../../config';

// Router
const router = Router();

const upload = multer({
  dest: `public/${config.FILES_ROUTE}`,
});

router.get('/', async (req, res) => {
  const [error, messagesList] = await to(controller.getMessages(req.query));
  if (error) {
    return helperResponse.errorRes(req, res, error);
  }

  return helperResponse.successRes(req, res, messagesList);
});

router.post('/', upload.single('image'), async (req, res) => {
  const body = req.body;
  const [error, messageResponse] = await to(controller.addMessage(body.user, body.chat, body.message, req.file));
  if (error) {
    return helperResponse.errorRes(req, res, error, 400);
  }

  return helperResponse.successRes(req, res, messageResponse, 201);
});

router.patch('/:id', async (req, res) => {
  const recordId = req.params.id;
  const body = req.body;
  const [error, messageResponse] = await to(controller.updateMessage(recordId, body.message));
  if (error || !messageResponse) {
    let finalResToUser = error;
    if (!messageResponse) { // Pending Verify Move to controller
      finalResToUser = `No message was updated`;
    }
    return helperResponse.errorRes(req, res, finalResToUser, 400);
  }

  return helperResponse.successRes(req, res, messageResponse, 200);
});

router.delete('/:id', async (req, res) => {
  const recordId = req.params.id;
  const [error, messageResponse] = await to<IDeleteMongoRes, any>(controller.deleteMessage(recordId));
  const notChanges = messageResponse && messageResponse.deletedCount === 0;
  if (error || notChanges) {
    let finalResToUser = error;
    if (notChanges) { // Pending Verify Move to controller
      finalResToUser = 'Not changes. The record was probably deleted before';
    }
    return helperResponse.errorRes(req, res, finalResToUser, 400);
  }

  return helperResponse.successRes(req, res, `Message with id: ${recordId} deleted`, 201);
});

export default router;
