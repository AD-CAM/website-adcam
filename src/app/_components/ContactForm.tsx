'use client'
/* Library Imports */
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Types Imports */
import { EmailData } from '../_types/email'
/* Utils & Data Imports */
import { isOnMaintenance } from '../_utils/handleEnvVariables'
import { regex } from '../_utils/regex'
/* Components Imports */
import { SubmitButton } from "./Button"
import MaintenanceBanner from './MaintenanceBanner'



const inputVariants: Variants = {
    rest: {
        borderColor: "rgba(255, 255, 255, 0)",
    },
    hover: {
        borderColor: "rgba(252, 105, 105, 1)",
    },
    focus: {
        borderColor: "rgba(200, 4, 4, 1)",
    }
}



const useStyles = makeStyles()((theme) => {
    return {
        footerRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",

            color: "#FFFFFF",

            [theme.breakpoints.down('sm')]: {
                flexBasis: "auto",
                boxSizing: "border-box",

                width: "100%",

                marginTop: theme.spacing(5),
                paddingLeft: theme.spacing(5),
                paddingRight: theme.spacing(5),
            },
            [theme.breakpoints.up('sm')]: {
                width: "30%",
            },
            [theme.breakpoints.down('lg')]: {
                flexBasis: "60%",
            },
            [theme.breakpoints.up('lg')]: {
                flexBasis: "auto",
            },
        },
        genericRoot: {

        },
        formTitle: {
            marginTop: 0,
            width: "100%",
            fontWeight: 600,
        },
        inputContainer: {
            [theme.breakpoints.down('sm')]: {
                marginBottom: theme.spacing(1),
                width: "100%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "48%",
            },
        },
        inputLabel: {
            marginLeft: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
        },
        inputField: {
            boxSizing: "border-box",

            margin: "0",
            padding: theme.spacing(1),
            outline: "none",
            border: "1px solid transparent",
            borderRadius: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(14),

            width: "100%",
            maxWidth: "100%",
        },
        messageLabel: {
            width: "100%",

            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
        },
        messageField: {
            textAlign: "start",
            boxSizing: "border-box",

            margin: "0",
            marginBottom: theme.spacing(2),
            padding: theme.spacing(1),
            outline: "none",
            border: "1px solid transparent",
            borderRadius: theme.spacing(0.5),

            fontSize: theme.typography.pxToRem(12),
            minWidth: "100%",
            resize: "none",

            [theme.breakpoints.down('sm')]: {
                minHeight: theme.spacing(16),
            },
            [theme.breakpoints.up('sm')]: {
                minHeight: theme.spacing(20),
            },
        },
        buttonContainer: {
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            width: "100%",
        },
        characterCount: {
            margin: "0",
            padding: "0",

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
        },
        characterCountTooLarge: {
            margin: "0",
            padding: "0",

            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,

            color: "rgba(252, 105, 105, 1)",
        },



        contactSuccess: {
            position: "absolute",
            left: "0",

            borderRadius: theme.spacing(0.75),
            padding: theme.spacing(1.15),
            margin: 0,

            fontWeight: 600,

            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#228b22",
            color: "white",
        },



        invoiceRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "100%",
            backgroundColor: "#f7f7f7",
            borderRadius: theme.spacing(0.75),

            padding: theme.spacing(3),
        },
        invoiceTitle: {
            marginTop: 0,
            width: "100%",
            fontWeight: 600,
        },
        invoiceInputRoot: {
            width: "100%",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        invoiceButton: {
            position: "relative",

            display: "flex",
            alignSelf: "flex-end",
            alignItems: "flex-start",
            justifyContent: "space-between",

            width: "100%",

            marginTop: theme.spacing(1),
        },
    }
})

interface ContactFormProps {
    location: string;
}



function handleContactSend(data: any) {
    const emailData = {
        subject: "Demande de contact depuis AD-CAM.fr",
        text: `Vous avez reçu une demande de contact.

        Nom du ou de la correspondant(e): ${data.name}
        Email du ou de la correspondant(e): ${data.email}
        Message: ${data.message}
        
        Cet email a été envoyé automatiquement depuis le serveur de AD-CAM.fr et ne permet pas d'y répondre directement.`
    }

    handleFormSubmit(emailData)
}

function handleInvoiceSend(data: any) {
    const emailData = {
        subject: "Demande de devis express depuis AD-CAM.fr",
        text: `Vous avez reçu une demande de devis express.

        Nom du ou de la correspondant(e): ${data.name}
        Email du ou de la correspondant(e): ${data.email}
        Téléphone du ou de la correspondant(e): ${data.phone}
        
        Cet email a été envoyé automatiquement depuis le serveur de AD-CAM.fr et ne permet pas d'y répondre directement.`
    }

    handleFormSubmit(emailData)
}

async function handleFormSubmit(data: EmailData) {
    await fetch('/api/email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(() => {
        console.log('Email posted')
    })
    .catch((error) => {
        console.log('An error occurred while sending the email:', error)
    })
}






function InvoiceForm() {
    const { classes } = useStyles()
    const { handleSubmit, register, reset, formState: { isValid, errors, isSubmitSuccessful } } = useForm({mode: 'onChange'})



    function onSubmit(data: any) {
        handleInvoiceSend(data)
        reset()
    }



    return (
        <form className={ classes.invoiceRoot } onSubmit={ handleSubmit(onSubmit) }
              aria-labelledby="form-title"
        >
            <h3 className={ classes.invoiceTitle } id="form-title">{ `Devis express` }</h3>

            <div className={ classes.invoiceInputRoot }>
                <label className={ classes.inputLabel } htmlFor="name-field" id="name-label">{ `Nom*` }</label>
                <motion.input   className={ classes.inputField }

                            { ... register('name', { required: true, pattern: regex.name })}

                            placeholder='Votre nom...'
                            id="name-field"
                            type="text"
                            name="name"
                            autoComplete="off"

                            aria-required="true"
                            aria-describedby='name-label'

                            variants={ inputVariants }
                            initial="rest"
                            whileHover="hover"
                            whileFocus="focus"
                />
            </div>
            <div className={ classes.invoiceInputRoot }>
                <label className={ classes.inputLabel } htmlFor="email-field" id="email-label">{ `Adresse Email*` }</label>
                <motion.input   className={ classes.inputField }

                            { ... register('email', { required: true, pattern: regex.email })}

                            placeholder='Votre adresse email...'
                            id="email-field"
                            name="email"
                            type="email" 
                            autoComplete="off"

                            aria-required="true"
                            aria-describedby='email-label'

                            variants={ inputVariants }
                            initial="rest"
                            whileHover="hover"
                            whileFocus="focus"
                />
            </div>

            <div className={ classes.invoiceInputRoot }>
                <label className={ classes.inputLabel } htmlFor="phone-field" id="phone-label">{ `Numéro de Téléphone*` }</label>
                <motion.input   className={ classes.inputField }

                            { ... register('phone', { required: true, pattern: regex.phone })}

                            placeholder='Votre numéro de téléphone...'
                            id="phone-field"
                            name="phone"
                            type="tel" 
                            autoComplete="off"

                            aria-required="true"
                            aria-describedby='email-label'

                            variants={ inputVariants }
                            initial="rest"
                            whileHover="hover"
                            whileFocus="focus"
                />
            </div>

            <div className={ classes.invoiceButton }>
                {
                    isOnMaintenance ?   <MaintenanceBanner /> 
                                    :   <>
                                            <SubmitButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" } enabled={ isValid }/>
                                            { isSubmitSuccessful && 
                                                                        <motion.p  className={ classes.contactSuccess }
                                                                            initial={{ opacity: 0 }}
                                                                            animate={{ opacity: 1 }}
                                                                        >
                                                                            { `Demande envoyée.` }
                                                                        </motion.p>
                                            }
                                        </>
                }
            </div>
        </form>
    )
}



function ContactForm({ location }: ContactFormProps) {
    const { classes } = useStyles()
    const { handleSubmit, register, reset, formState: { isValid, errors, isSubmitSuccessful }, watch } = useForm({mode: 'onChange'})
    const messageValue = watch('message', '')



    function onSubmit(data: any) {
        handleContactSend(data)
        reset()
    }



    return (      
        <form className={ location === "footer" ? classes.footerRoot : classes.genericRoot } onSubmit={ handleSubmit(onSubmit)}
              aria-labelledby="form-title"
        >
            <h3 className={ classes.formTitle } id="form-title">{ `Contactez-nous` }</h3>

            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel } htmlFor="name-field" id="name-label">{ `Nom*` }</label>
                <motion.input   className={ classes.inputField }

                            { ... register('name', { required: true, pattern: regex.name })}

                            placeholder='Votre nom...'
                            id="name-field"
                            type="text"
                            name="name"
                            autoComplete="off"

                            aria-required="true"
                            aria-describedby='name-label'

                            variants={ inputVariants }
                            initial="rest"
                            whileHover="hover"
                            whileFocus="focus"
                />
            </div>
            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel } htmlFor="email-field" id="email-label">{ `Adresse Email*` }</label>
                <motion.input   className={ classes.inputField }

                            { ... register('email', { required: true, pattern: regex.email })}

                            placeholder='Votre adresse email...'
                            id="email-field"
                            name="email"
                            type="email" 
                            autoComplete="off"

                            aria-required="true"
                            aria-describedby='email-label'

                            variants={ inputVariants }
                            initial="rest"
                            whileHover="hover"
                            whileFocus="focus"
                />
            </div>

            <label className={ classes.messageLabel } htmlFor="message-field" id="message-label">{ `Message*` }</label>
            <motion.textarea    className={ classes.messageField }

                            { ... register('message', { required: true, pattern: regex.message })}

                            placeholder='Votre message...'
                            id="message-field"
                            name="message"

                            aria-required="true"
                            aria-describedby='message-label'

                            variants={ inputVariants }
                            initial="rest"
                            whileHover="hover"
                            whileFocus="focus"
            />

            <div className={ classes.buttonContainer }>
                {
                    isOnMaintenance ?   <MaintenanceBanner /> 
                                    :   <>
                                            <SubmitButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" } enabled={ isValid }/>
                                            
                                            { isSubmitSuccessful && 
                                                                        <motion.p  className={ classes.contactSuccess }
                                                                            initial={{ opacity: 0 }}
                                                                            animate={{ opacity: 1 }}
                                                                        >
                                                                            { `Message envoyé.` }
                                                                        </motion.p>
                                            }

                                            <p className={ (messageValue.length <= 360) ? classes.characterCount : classes.characterCountTooLarge }>
                                                { (messageValue.length <= 360) ? `${messageValue.length}/360` : `( ! ) ${messageValue.length}/360` }
                                            </p>
                                        </>
                }
            </div>
        </form>
    )
}



export { ContactForm, InvoiceForm }