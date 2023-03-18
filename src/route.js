const express = require('express')
const router = express.Router()
router.get('/', (req, res)=>{
    res.send({status: 200 , data: 'succesfull'})
})
module.exports = router