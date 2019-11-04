const { verifyToken } = require("./utils/jwt");

module.exports = {
  requireValidToken: (req, res, next) => {
    // Check for Bearer token
    const { authorization } = req.headers;
    const token = authorization && authorization.split(" ")[1];

    if (!authorization) {
      return res.status(400).send({ data: "Missing authorization header" });
    }

    if (!verifyToken(token)) {
      return res.status(401).send({ data: "Invalid token" });
    }

    next();
  }
};
