'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import SectionTitle from '../../_components/SectionTitle'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",
            paddingTop: theme.spacing(10),

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",
            maxWidth: "1024px",
        },
    }
})



export default function AlmaConditions() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>

                <SectionTitle text={ "CGV Alma" } />

            </div>
        </section>
    )
}
