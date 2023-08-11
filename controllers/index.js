const router = require("express").Router()
const birdRoutes = require("./api/birdRoutes")
const frontendRoutes = require("./frontendRoutes")

router.use("/api/birds", birdRoutes)
router.use("/", frontendRoutes)

module.exports = router