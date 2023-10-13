/* Libraries Imports */
import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'



if(process.env.SENDGRID_API_KEY !== undefined) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
} else {
    console.error(`The SendGrid API key is undefined!`)
}



export async function POST(req: any) {
    const data = await req.json()

    if(!data.subject || !data.text) {
        return new NextResponse('Error while sending email', { status: 500 })
    }

    const msg = {
        to: "contact@ad-cam.fr",
        from: "contact@ad-cam.fr",
        subject: data.subject,
        text: data.text
    }



    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            return new NextResponse('Email sent', { status: 200 })
        })
        .catch((error) => {
            console.error(error)
            return new NextResponse('Error while sending email', { status: 500 })
        })
}