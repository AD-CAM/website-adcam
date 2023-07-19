'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Type Imports */
import { MouseEventHandler } from 'react'
/* Components Imports */
import { FunctionButton } from "./Button"



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
            width: "100%",
            maxWidth: "100%",
        },
        messageField: {
            minWidth: "100%",
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
