require('dotenv').config()
const app = require('./src/app')

app.listen(5000,(req,res)=>{
    console.log("server started on 5000");
})