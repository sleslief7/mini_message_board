const pool = require('./pool');

const getAllMessages = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM messages;');
    return rows;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
};

const createMessage = async (userName, messageText) => {
  try {
    await pool.query(
      `INSERT INTO messages (text, username, added)
      VALUES ($1, $2, $3);`,
      [messageText, userName, new Date()]
    );
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
};

const queryMessageById = async (id) => {
  try {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1;', [
      id,
    ]);
    return rows[0];
  } catch (error) {
    console.error('Error getting message by ID:', error);
    throw error;
  }
};

module.exports = {
  getAllMessages,
  createMessage,
  queryMessageById,
};
