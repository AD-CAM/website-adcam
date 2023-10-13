/* Env Variable Assignment */
const destination = process.env.SENDGRID_DESTINATION
/* Libraries Imports */
import sgMail from '@sendgrid/mail'



export async function GET() {
    return new Response('There is no server logic on GET route for email API', { status: 200 })
}



export async function POST(req: any) {
    if(process.env.SENDGRID_API_KEY !== undefined) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    } else {
        return new Response('The Server Sendgrid API key is undefined', { status: 500 })
    }
    

    
    const data = await req.json()

    if(!data.subject || !data.text) {
        return new Response('Error while sending email', { status: 500 })
    }



    const msg = {
        to: destination,
        from: "contact@ad-cam.fr",
        subject: data.subject,
        text: data.text
    }



    try {
        await sgMail.send(msg)

        console.log('Email sent')

        return new Response('Email sent', { status: 200 })
    } catch (error) {
        console.error(error)

        return new Response('Error while sending email', { status: 500 })
    }
}