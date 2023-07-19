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
        },
        genericRoot: {
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
        <>
            { location === "footer" ?
                <form className={ classes.footerRoot }>
                    <FunctionButton text={ "Envoyer" } description={ "Nous envoyer le formulaire de contact complété" } handler={ testHandler } />
                </form>

                                    :
                <form className={ classes.genericRoot }>

                </form>
                                    
            }
        </>
    )
}
