const express = require('express')
const aiRoutes = require("./routes/ai.routes")
const app = express()
const cors = require('cors')


app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use(express.json())
app.use(cors({
    origin: "https://problem-solver-frontend.vercel.app", // Allow only your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed request methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}))
app.use("/ai",aiRoutes)

module.exports = app