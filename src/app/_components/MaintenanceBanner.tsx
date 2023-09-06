'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            boxSizing: "border-box",
            padding: theme.spacing(2),

            borderRadius: theme.spacing(0.75),
            
            backgroundColor: "#e64c00",
        },
        text: {
            fontWeight: 600,
            color: "white",

            margin: 0,
            padding: 0,
        },
    }
})



export default function MaintenanceBanner() {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>
            <p className={ classes.text }>{ `Pour des raisons de maintenance, les formulaires de contact ne fonctionnent actuellement pas. Pour toute demande, joignez nous au 06 95 86 91 76.` }</p>
        </div>
    )
}
