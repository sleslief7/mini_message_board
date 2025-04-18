const { randomUUID } = require('crypto');
const { Router } = require('express');

const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    id: randomUUID(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    id: randomUUID(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});
indexRouter.get('/new', (req, res) => {
  res.render('form');
});
indexRouter.post('/new', (req, res) => {
  const { userName, messageText } = req.body;

  messages.push({
    text: messageText,
    user: userName,
    added: new Date(),
    id: randomUUID(),
  });
  res.redirect('/');
});

indexRouter.get('/message/:id', (req, res) => {
  const { id } = req.params;
  const message = messages.find((message) => message.id === id);
  res.render('message', { message });
});
module.exports = indexRouter;
