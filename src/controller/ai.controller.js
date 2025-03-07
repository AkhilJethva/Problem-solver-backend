const aiService = require('../services/ai.services')

const handlerFunction= async(req,res)=>{
    // const code = req.body.code;
    const prompt = req.body.prompt
    console.log(prompt)
    if(!prompt){
        res.status(400).send({message:"prompt is required"})
    }
    const response = await aiService(prompt)
    res.status(200).send(response)
}

module.exports = {handlerFunction}