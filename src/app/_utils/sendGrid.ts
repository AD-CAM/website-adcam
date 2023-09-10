import sendgridMail from '@sendgrid/mail'



sendgridMail.setApiKey(process.env.SENDGRID_API_KEY as string)



export default sendgridMail