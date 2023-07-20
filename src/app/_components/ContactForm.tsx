'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Type Imports */
import { MouseEventHandler } from 'react'
/* Components Imports */
import { FunctionButton } from "./Button"



const inputVariant: Variants = {
    rest: {

    },
    select: {

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
            width: "50%",
        },
        inputLabel: {

        },
        inputField: {
            boxSizing: "border-box",

            margin: "0",
            padding: "0",
            outline: "none",

            width: "100%",
            maxWidth: "100%",
        },
        messageField: {
            boxSizing: "border-box",

            margin: "0",
            padding: "0",
            outline: "none",

            minWidth: "100%",
            resize: "none",
        }
    }
})

interface ContactFormProps {
    location: string;
}

const testHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    console.log("Ahah test")
}



export default function ContactForm({ location }: ContactFormProps) {
    const { classes } = useStyles()

    return (      
        <form className={ location === "footer" ? classes.footerRoot : classes.genericRoot }>
            <h3 className={ classes.formTitle }>{ `Contactez-nous` }</h3>

            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel }></label>
                <input className={ classes.inputField }></input>
            </div>
            <div className={ classes.inputContainer }>
                <label className={ classes.inputLabel }></label>
                <input className={ classes.inputField }></input>
            </div>


            <textarea className={ classes.messageField }></textarea>

            <FunctionButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" } handler={ testHandler } />
        </form>
    )
}
