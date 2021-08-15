import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject, message, name } = req.body;
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.gmail.com",
        domain: 'gmail.com',
        auth: {
            user: 'mymasterwar.mat@gmail.com',
            pass: 'Abcde12345-',
        },
        authentication: 'plain'
    });

    const msg = {
        to: 'dominic@mymasterwar.com',
        from: email,
        subject: "[My Master War] - " + subject,
        name: name,
        text: `Fullname: ${name} ------ Email Address: ${email} ------ Message: ${message}`,
        html: `<div>Fullname: ${name}<br/>Email Address: ${email}<br/>Message: ${message}</div>`,
    };

    try {
        transporter.sendMail(msg, function (err: any, info: any) {
            if (err)
                res.status(500).json({ error: err })
            else
                res.json({ message: `Email has been sent` })
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}