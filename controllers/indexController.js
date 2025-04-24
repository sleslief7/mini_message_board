const {
  getAllMessages,
  createMessage,
  queryMessageById,
} = require('../db/queries');

async function getMessages(req, res) {
  const messages = await getAllMessages();

  res.render('index', {
    title: 'Mini Messageboard',
    messages,
  });
}

async function createNewMessage(req, res) {
  const { userName, messageText } = req.body;
  await createMessage(userName, messageText);
  res.redirect('/');
}

async function getMessageById(req, res) {
  const { id } = req.params;
  const message = await queryMessageById(id);
  res.render('message', { message });
}

function renderForm(req, res) {
  res.render('form');
}

module.exports = {
  getMessages,
  createNewMessage,
  getMessageById,
  renderForm,
};
