const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let records = [];
const yts = require( 'yt-search' )



let links =[]
let numberOfVideos = 10 

router.get('/dir', (req, res)=>{
  res.send(__dirname)
})
router.get('/html', (req, res)=>{
  res.sendFile(path.join('./index.html'))
})
router.get('/yt', (req, res)=>{
  let link = []
  yts( ' how to install apps in pc' ).then((r)=>{
    
    const videos = r.videos.slice( 0, numberOfVideos )
    videos.forEach( function ( v ) {
    const title = v.title
    const img = v.image
    const des = v.description
    const author = v.author.name
    const duration = v.duration.timestamp
    const url = v.url
    const data1 = `*${title}* \n${url} \n \n*Author*:${author} \n \n*Duration*:${duration} \n \n*Description*:${des} *`
    link.push(data1)
     
  } )
    
})
 res.send(link)
})
//Get all students

//Create new record
router.post('/add', (req, res) => {
  res.send(__dirname);
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'Smith',
      email: 'smith@gmail.com',
    },
    {
      id: '002',
      name: 'Sam',
      email: 'sam@gmail.com',
    },
    {
      id: '003',
      name: 'lily',
      email: 'lily@gmail.com',
    },
  ]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
