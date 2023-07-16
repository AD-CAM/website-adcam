'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import SectionTitle from '../_components/SectionTitle'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",

            paddingTop: theme.spacing(10),

            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
        },
    }
})



export default function OurPledge() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <SectionTitle text={ "NOS ENGAGEMENTS" } />

            
        </section>
    )
}
