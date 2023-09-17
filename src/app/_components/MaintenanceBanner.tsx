'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Icons Imports */
import { PiWarningBold } from 'react-icons/pi'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            boxSizing: "border-box",
            padding: theme.spacing(2),

            borderRadius: theme.spacing(0.75),
            
            backgroundColor: "#C74200",
        },
        icon: {
            color: "white",
            
            minHeight: "30px",
            minWidth: "30px",
        },
        text: {
            fontWeight: 500,
            color: "white",

            boxSizing: "border-box",

            margin: 0,
            marginLeft: theme.spacing(2),
            padding: 0,
        },
    }
})



export default function MaintenanceBanner() {
    const { classes } = useStyles()

    return (      
        <div className={ classes.root }>
            <PiWarningBold className={ classes.icon } />
            <p className={ classes.text }>{ `Pour des raisons de maintenance, les formulaires de contact ne fonctionnent actuellement pas. Pour toute demande, joignez nous au 06 95 86 91 76.` }</p>
        </div>
    )
}
