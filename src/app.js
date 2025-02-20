const express = require('express')
const aiRoutes = require("./routes/ai.routes")
const app = express()
const cors = require('cors')


app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use(express.json())

const allowedOrigins = [
    "http://localhost:5173", // Local development
    "https://problem-solver-frontend.vercel.app" // Deployed frontend
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use("/ai",aiRoutes)

module.exports = app