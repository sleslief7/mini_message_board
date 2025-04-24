const { Router } = require('express');
const {
  getMessages,
  createNewMessage,
  getMessageById,
  renderForm,
} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getMessages);
indexRouter.get('/new', renderForm);
indexRouter.post('/new', createNewMessage);
indexRouter.get('/message/:id', getMessageById);
module.exports = indexRouter;
