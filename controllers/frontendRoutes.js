const router = require('express').Router();
const {Bird} = require('../models');

router.get('/', async (req, res) => {
    try {
        const birdData = await Bird.findAll()
        const birds = birdData.map((bird) => bird.get({ plain: true }))
        console.log(birds);
        // res.render("home", {birds: birds})
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
})
router.get("/new-bird", (req,res) => {
    try {
      res.render("newBird")
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
      
    }
  })
module.exports = router;