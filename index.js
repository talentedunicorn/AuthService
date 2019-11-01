"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;
const routes = require("./src/routes");

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Auth Service running on 0.0.0.0:${PORT}`));
