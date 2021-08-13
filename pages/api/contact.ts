import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey("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");

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject, message, name } = req.body
    const msg = {
        to: 'nguyenthanhdat.dcna@gmail.com',
        from: email,
        subject: "[My Master War] - " + subject,
        name,
        text: message,
    };

    try {
        await sgMail.send(msg);
        res.json({ message: `Email has been sent` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error sending email' })
    }
}