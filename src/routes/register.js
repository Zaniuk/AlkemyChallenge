const mongoose = require('mongoose')
const router = require('express').Router()
const DB_URL = process.env.DB_URL

router.get('/', (_req, res) =>{
    res.send('getting register route')
} )
module.exports = router;
