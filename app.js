const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  helmet = require("helmet"),
  logger = require("morgan"),
  cors = require("cors");
require("dotenv").config();

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/chatroom");

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/chatroom", apiRouter);

module.exports = app;
