'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */



const useStyles = makeStyles()((theme) => {
    return {
        root: {
        },
    }
})



export default function AboutSection() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div>
                <aside></aside>
                <article>
                    
                </article>
                <aside></aside>
            </div>

            <aside></aside>
        </section>
    )
}
