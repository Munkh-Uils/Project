const { Router } = require("express");
const { getUrls, getUrl, createUrl } = require("../controllers/url.controller")

const router = Router();

router
    .get("/url", getUrls)
    .get("/url/:id", getUrl)
    .post("/", createUrl)

module.exports = router;