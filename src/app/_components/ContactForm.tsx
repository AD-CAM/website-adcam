'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



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


export default function ContactForm({ location }: ContactFormProps) {
    const { classes } = useStyles()

    return (      
        <>
            { location === "footer" ?
                <div className={ classes.footerRoot }></div>

                                    :
                <div className={ classes.genericRoot }></div>
                                    
            }
        </>
    )
}
