'use client'
/* Library Imports */
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Utils & Data Imports */
import { emailRegex } from '../_utils/regex'
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

            width: "30%",

            color: "#FFFFFF",
        },
        genericRoot: {
        },
        formTitle: {
            width: "100%",
            fontWeight: 600,
        },
        inputContainer: {
            marginBottom: theme.spacing(2),

            width: "48%",
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

            width: "100%",
            maxWidth: "100%",
        },
        messageLabel: {
            width: "100%",

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

            minHeight: theme.spacing(8),
            minWidth: "100%",
            resize: "none",
        },
        buttonContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",

            width: "100%",
        }
    }
})

interface ContactFormProps {
    location: string;
}



export default function ContactForm({ location }: ContactFormProps) {
    const { classes } = useStyles()
    const { handleSubmit, register } = useForm({mode: 'onChange'})



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

                            { ... register('email', { required: true, pattern: emailRegex })}

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

                            { ... register('email', { required: true, pattern: emailRegex })}

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

                            { ... register('message', { required: true, pattern: emailRegex })}
                            
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
                <SubmitButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" }/>
            </div>
        </form>
    )
}
