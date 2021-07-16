const express = require('express');

const router= express.Router();

router.get('/', (req,res,next) => {
    res.render('index',{title: 'INDEX'})
    console.log('-----------------------\n')
    console.log('User is on Home 🏠🏡')
    console.log('-----------------------\n')
})

module.exports = router;