
const express = require('express')
const router = require('./route.js')
const app = express();
const serverless = require('serverless-http')
app.use('/.netlify/functions/api',router )

app.use
module.exports.handler = serverless(app)