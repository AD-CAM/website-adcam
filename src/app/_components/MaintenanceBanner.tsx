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
            
        </div>
    )
}
