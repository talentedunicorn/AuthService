"use strict";

const routes = require("express").Router();
const auth = require("./auth");
const { requireValidToken } = require("./middleware");

routes.get("/", (req, res) => {
  res.status(200).json({ data: "Pinged Auth Service..." });
});

routes.post("/login", auth.login);
routes.post("/token", auth.refreshToken);
routes.delete("/logout", requireValidToken, auth.logout);

routes.all("/profile", requireValidToken);

routes.get("/profile", (req, res) => {
  res.send({ data: "Profile data" });
});

module.exports = routes;
