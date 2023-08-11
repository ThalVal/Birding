const router = require("express").Router()
const {User} = require("../../models")

router.get("/", async (req, res) =>{
try {
    const users = await User.findAll()
    res.status(200).json(users)
    
} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
})

module.exports = router