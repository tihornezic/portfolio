/* export default function contact(req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    if (req.method === 'POST') {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: 'tihorfrontenddev@gmail.com',
                // pass: process.env.password,
                pass: 'reactfrontend'
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
} */

require('dotenv').config()
const nodemailer = require("nodemailer")

export default async (req, res) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'tihorfrontenddev@gmail.com',
            // pass: process.env.password,
            pass: 'reactfrontend'
        },
        secure: true,
    })

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        })
    })

    const mailData = {
        from: 'tihorfrontenddev@gmail.com',
        to: 'tihor.nezic@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        })
    })

    res.send('success')
}