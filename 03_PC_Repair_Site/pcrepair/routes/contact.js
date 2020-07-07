var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contact', {
        title: 'Contact',
    });
});
// let testAccount = await nodemailer.createTestAccount();
// Send Email

router.post('/send', (req, res, next) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'cortney27@ethereal.email',
            pass: 'qARJBFuhxzxHWwAR4T'
        },
    });

    var mailOptions = {
        from: '"Cortney Halvorson👻" <cortney27@ethereal.email>',
        to: 'baz@example.com',
        subject: 'Hello from PCRepair✔',
        text: 'You have a submission from... Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<p>You have a submission from...</p> <ul><li>Name: ' + req.body.name + '</li><li> Email: ' + req.body.email + '</li><li> Message: ' + req.body.message + '</li></ul>'
    }



    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message Sent: ' + info.response);
        res.redirect('/');
    });


})
module.exports = router; // Export to use from different file