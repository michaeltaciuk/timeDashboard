const express = require("express");
const router = express.Router();

const users = require("./users");

const log = require("debug")("routes");

router.get("/user/:userEmail", async (req, res) => {
    const { userEmail } = req;
    const result = await users.getUser(userEmail);
    res.send(result);
});

router.post("/user/new", async (req, res) => {
  const { body } = req;
  const result = await users.createUser(body);
  res.send(result);
});

router.put("/user/:userId", async (req, res) => {
  const { body } = req;
  const result = await users.updateUser(body);
  res.send(result);
});

router.delete("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  await users.deleteUser(userId);
  res.sendStatus(200);
});

module.exports = router;