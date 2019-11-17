const db = require("./conn");

async function pullMessages(roomName, lastMessage) {
  messages = await db.any(
    `SELECT * FROM chat_${roomName} WHERE id > ${lastMessage};`
  );
  return messages;
}

module.exports = pullMessages;
