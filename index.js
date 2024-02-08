require('dotenv').config()
const express = require("express")
const app = express()





app.get('/',(req,res)=>{

	res.send("Hello World")

})

app.get('/login',(req,res)=>{

	res.send("<h1>Hello World</h1>")

})

app.get('/github',(req,res)=>{

	res.send("<h1>There is no github</h1>")

})


app.listen(process.env.PORT,()=>{

	console.log(`listening`)

})
