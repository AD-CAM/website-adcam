'use client'
/* Library Imports */
import { useState, useEffect } from 'react'
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

    const [formData, setFormData] = useState({
        name: {
            value: '',
            valid: false,
            changed: false
        },
        email: {
            value: '',
            valid: false,
            changed: false
        },
        message: {
            value: '',
            valid: false,
            changed: false
        },
    })

    function handleFormSend(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formWasCompleted: boolean =       formData.name.valid
                                            &&  formData.email.valid
                                            &&  formData.message.valid

        if(formWasCompleted) {
            console.log("Placeholder for sending to API")
        }
    }

    function validateField(value: string, name: string) {
        const field = { value: value, name: name }
        const fieldIsEmpty = field.value === ''
        let fieldIsValid = false

        if(field.name === "email") {
            fieldIsValid = emailRegex.test(field.value)
        } else {
            fieldIsValid = !fieldIsEmpty
        }
        
        return fieldIsValid
    }

    function handleFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target

        setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            valid: validateField(value, name),
                            changed: true,
                        }
                    })
    }

    useEffect(() => {
        setFormData(formData)
    }, [formData])



    return (      
        <form className={ location === "footer" ? classes.footerRoot : classes.genericRoot } onSubmit={ handleFormSend }
              aria-labelledby="form-title"
        >
            <h3 className={ classes.formTitle } id="form-title">{ `Contactez-nous` }</h3>

            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel } htmlFor="name-field" id="name-label">{ `Nom*` }</label>
                <motion.input   className={ classes.inputField }
                                placeholder='Votre nom...'
                                id="name-field"
                                name="name"
                                autoComplete="off"

                                aria-required="true"
                                aria-describedby='name-label'

                                variants={ inputVariants }
                                initial="rest"
                                whileHover="hover"
                                whileFocus="focus"

                                value={ formData.name.value }
                                onChange={ handleFormChange }
                />
            </div>
            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel } htmlFor="email-field" id="email-label">{ `Adresse Email*` }</label>
                <motion.input   className={ classes.inputField }
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

                                value={ formData.email.value }
                                onChange={ handleFormChange }
                />
            </div>

            <label className={ classes.messageLabel } htmlFor="message-field" id="message-label">{ `Message*` }</label>
            <motion.textarea    className={ classes.messageField }
                                placeholder='Votre message...'
                                id="message-field"
                                name="message"

                                aria-required="true"
                                aria-describedby='message-label'

                                variants={ inputVariants }
                                initial="rest"
                                whileHover="hover"
                                whileFocus="focus"

                                value={ formData.message.value }
                                onChange={ handleFormChange }
            />

            <div className={ classes.buttonContainer }>
                <SubmitButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" }/>
            </div>
        </form>
    )
}
