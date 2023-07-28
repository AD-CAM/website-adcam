'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Utils & Data Imports */
import { ReviewObject } from '../_types/reviews'



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



function ReviewsHeading({ reviewsArray }: { reviewsArray: ReviewObject[] }) {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            
        </section>
    )
}






export default function ReviewsSection({ reviewsArray }: { reviewsArray: ReviewObject[] }) {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            
        </section>
    )
}