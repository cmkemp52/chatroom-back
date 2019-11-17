const db = require("./conn");

async function receiveMessage(roomName, username, message) {
  messages = await db.any(
    `INSERT INTO chat_${roomName} (name, message) VALUES ('${username}','${message}');`
  );
  console.log(messages);
  return messages;
}

module.exports = receiveMessage;
