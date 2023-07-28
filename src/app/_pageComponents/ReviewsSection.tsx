'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'




const useStyles = makeStyles()((theme) => {
    return {
        root: {
            

            [theme.breakpoints.down('sm')]: {
                
            },
            [theme.breakpoints.up('sm')]: {
                    
            },
        },
    }
})



export default function ReviewsSection() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            
        </section>
    )
}