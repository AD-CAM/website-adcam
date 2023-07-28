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



interface ReviewObject  {
    author_name: string,
    author_url: string,
    language: string,
    profile_photo_url: string,
    rating: number,
    relative_time_description: string,
    text: string,
    time: number
}



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