const db = require("./conn");

async function createRoom(roomName) {
  try {
    newRoom = await db.any(
      `CREATE TABLE IF NOT EXISTS chat_${roomName.toLowerCase()} (id serial primary key, name VARCHAR(100) NOT NULL, message VARCHAR(1000) NOT NULL, logged TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0));`
    );
    console.log(newRoom);
    return newRoom;
  } catch (err) {
    return err;
  }
}

module.exports = createRoom;
