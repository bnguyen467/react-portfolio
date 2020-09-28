const router = require("express").Router();

router.use("/api", require("./projectRoutes.js"));

module.exports = router;
