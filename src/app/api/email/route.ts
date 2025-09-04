/* Env Variable Assignment */
let destination = process.env.EMAIL_DESTINATION
let origin = process.env.EMAIL_ORIGIN
/* Libraries Imports */
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)



export async function GET() {
   return new Response('There is no server logic on GET route for email API', { status: 200 })
}



export async function POST(req: any) {
   if(!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined')
      return new Response('The Server Resend API key is undefined', { status: 500 })
   }
   
   const data = await req.json()

   if(!data.subject || !data.text) {
      return new Response('Missing subject or text in request', { status: 400 })
   }

   try {
      const response = await resend.emails.send({
         from: origin ? origin : "",
         to: destination ? destination : "",
         subject: data.subject,
         text: data.text,
      })
      
      console.log('Email sent successfully:', response)
      return new Response(JSON.stringify({ 
         message: 'Email sent',
         id: response.data?.id 
      }), { 
         status: 200,
         headers: { 'Content-Type': 'application/json' }
      })
      
   } catch (error: any) {
      console.error('Email Error:', error)
      
      return new Response(JSON.stringify({ 
         error: 'Error while sending email',
         details: error.message
      }), { 
         status: 500,
         headers: { 'Content-Type': 'application/json' }
      })
   }
}