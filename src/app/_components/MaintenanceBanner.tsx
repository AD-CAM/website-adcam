'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
        },
    }
})



export default function MaintenanceBanner() {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>
            <p>{ `En raison de maintenance, les formulaires de contact ne fonctionnent actuellement pas. Pour toute demande, joignez nous au 06 95 86 91 76.` }</p>
        </div>
    )
}
