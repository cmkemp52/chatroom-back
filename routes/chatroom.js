const express = require("express"),
  router = express.Router(),
  createRoom = require("../models/createRoom"),
  pullMessages = require("../models/pullMessages"),
  receiveMessage = require("../models/receiveMessage");

/* GET home page. */
router.get("/:chatroom/:afterMessage", async (req, res, next) => {
  const { chatroom, afterMessage } = req.params;
  const messages = await pullMessages(chatroom, afterMessage);
  res.json(messages);
});
router.put("/", async (req, res, next) => {
  const chatroom = req.body.chatroom;
  const response = await createRoom(chatroom);
  res.send(response);
});
router.put("/:chatroom", async (req, res, next) => {
  const { chatroom } = req.params;
  const { username, message } = req.body;
  const response = await receiveMessage(chatroom, username, message);
  res.send(response);
});

module.exports = router;
