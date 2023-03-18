
const express = require('express')
const router = require('./route.js')
const app = express();
app.use('/login',router )


app.listen(5000, ()=>{
    console.log('server is listening 5000')
})