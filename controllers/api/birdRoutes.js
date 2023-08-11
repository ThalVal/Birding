const router = require("express").Router()
const {Bird} = require("../../models")

router.get("/", async (req, res) =>{
try {
    const bird = await Bird.findAll()
    res.status(200).json(bird)

} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
})

router.post("/", async (req, res) =>{
    try {
        const bird = await Bird.create(req.body)
        res.status(200).json(bird)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

module.exports = router