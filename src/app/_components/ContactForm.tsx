'use client'
/* Library Imports */
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Utils & Data Imports */
import { regex } from '../_utils/regex'
/* Components Imports */
import { SubmitButton } from "./Button"



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
        invoiceRoot: {
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
                minHeight: theme.spacing(8),
            },
            [theme.breakpoints.down('lg')]: {
                minHeight: theme.spacing(16),
            },
            [theme.breakpoints.up('lg')]: {
                minHeight: theme.spacing(8),
            },
        },
        buttonContainer: {
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
        }
    }
})

interface ContactFormProps {
    location: string;
}






function InvoiceForm() {
    const { classes } = useStyles()
    const { handleSubmit, register, formState: { isValid, errors } } = useForm({mode: 'onChange'})



    function handleFormSend(data: any) {
        console.log("Placeholder for sending to API")
    }



    return (
        <form className={ classes.invoiceRoot } onSubmit={ handleSubmit(handleFormSend) }
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
                <SubmitButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" } enabled={ isValid }/>
            </div>
        </form>
    )
}



function ContactForm({ location }: ContactFormProps) {
    const { classes } = useStyles()
    const { handleSubmit, register, formState: { isValid, errors }, watch } = useForm({mode: 'onChange'})
    const messageValue = watch('message', '')



    function handleFormSend(data: any) {
        console.log("Placeholder for sending to API")
    }



    return (      
        <form className={ location === "footer" ? classes.footerRoot : classes.genericRoot } onSubmit={ handleSubmit(handleFormSend)}
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
                <SubmitButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" } enabled={ isValid }/>
                <p className={ (messageValue.length <= 360) ? classes.characterCount : classes.characterCountTooLarge }>
                    { (messageValue.length <= 360) ? `${messageValue.length}/360` : `( ! ) ${messageValue.length}/360` }
                </p>
            </div>
        </form>
    )
}



export { ContactForm, InvoiceForm }