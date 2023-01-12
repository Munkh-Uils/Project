const { Router } = require("express");

const router = Router();

router.get("/:id", redirect).post("/", generate);

module.exports = exports