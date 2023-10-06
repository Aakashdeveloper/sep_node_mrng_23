let nodemailer = require('nodemailer');
let dotenv = require('dotenv');
dotenv.config()

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ahanda205@gmail.com',
        pass:process.env.PASS
    }
})

let mailOptions = {
    from: 'ahanda205@ggmail.com',
    to: 'ahanda206@hotmail.com',
    subject: "Send Node Sep Email",
    text: "Hello world?",
    html: "<b>Hello world?</b>"
}


transporter.sendMail(mailOptions,(err,info) => {
    if(err) console.error(err)
    else{
        console.log(`Email Sent: ${info.response}`)
    }
})