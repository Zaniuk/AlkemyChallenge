
const router = require('express').Router()


router.get('/', (_req, res) =>{
    res.send('getting login route')
} )
module.exports = router;
