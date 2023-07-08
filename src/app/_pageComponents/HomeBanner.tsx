'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import GoToButton from '../_components/GoToButton'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            width: "100%",
            height: "90vh",

            background: "linear-gradient(150deg, rgba(3,0,0,1) 0%, rgba(69,16,16,1) 37%, rgba(126,85,85,1) 75%, rgba(154,143,143,1) 100%)",
        },
        banner: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            position: "relative",
            zIndex: 4,

            width: "100%",
            height: theme.spacing(12),
            marginTop: theme.spacing(5),

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(350deg, rgba(37,16,5,0.1) 0%, rgba(136,37,16,0.2) 35%, rgba(179,39,36,0.25) 63%, rgba(255,23,0,0.3) 100%)",
            backdropFilter: "blur(2px)",
        },
    }
})



export default function HomeBanner() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>

        </section>
    )
}
