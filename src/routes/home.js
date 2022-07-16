
const router = require('express').Router()


router.get('/', (_req, res) =>{
    res.send('getting home route')
} )
module.exports = router;
