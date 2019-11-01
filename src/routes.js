"use strict";

const routes = require("express").Router();
const auth = require("./auth");

routes.get("/", (req, res) => {
  res.status(200).json({ data: "Pinged Auth Service..." });
});

routes.post("/auth", auth);

module.exports = routes;
