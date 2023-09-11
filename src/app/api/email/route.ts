/* Types Imports */
import { EmailData } from '@/app/_types/email'
/* Libraries Imports */
import sgMail from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

let sgApiKey = ""
if(process.env.SENDGRID_API_KEY){
    sgApiKey = process.env.SENDGRID_API_KEY
}

sgMail.setApiKey(sgApiKey)



export async function POST(req: NextRequest) {
    /* const { to, subject, text }: any  = req.body

    const msg = {
        to,
        from: 'PLACEHOLDER',
        subject,
        text,
    }

    const response = await sgMail.send(msg)

    return NextResponse.json({ response }) */
    return "placeholder"
}