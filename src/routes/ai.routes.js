const express  = require('express')
const aiService = require('../services/ai.services')
const router = express.Router()

router.post("/get-review",async(req,res)=>{
    // const code = req.body.code;
    const prompt = req.body.prompt
    console.log(prompt)
    if(!prompt){
        res.status(400).send({message:"prompt is required"})
    }

    const response = await aiService(prompt)
    console.log(response)
    res.status(200).send(response)
})

module.exports = router