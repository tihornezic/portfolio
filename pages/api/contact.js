export default function contact (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'tihorfrontenddev@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    })

    const mailData = {
        from: 'tihorfrontenddev@gmail.com',
        to: 'tihor.nezic@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    // console.log(req.body)

    res.send('success')
}