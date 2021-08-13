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