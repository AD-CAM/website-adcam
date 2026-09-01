'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { IconButton } from '@/app/_components/Button'




const useStyles = makeStyles()((theme) => {
    return {
        contactUsRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            width: "100%",
            height: "auto",
            marginTop: "20px",
            marginBottom: "-40px",

            overflow: "hidden",

            backgroundColor: "rgba(20, 20, 20, 1)",
        },
        contactUsSubRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

            boxSizing: "border-box",

            width: "100%",
            height: "100%",
            maxWidth: "1100px",

            paddingBottom: theme.spacing(6),
        },
        contactUsText: {
            position: "relative",

            boxSizing: "border-box",

            padding: theme.spacing(6),
            paddingLeft: "0",
            margin: 0,

            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(4),
                paddingTop: theme.spacing(6),
            },
        },
        contactUsTitle: {
            boxSizing: "border-box",

            padding: 0,
            margin: 0,

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 400,

            color: "rgba(252, 105, 105, 1)",

            [theme.breakpoints.down('sm')]: {
                paddingBottom: theme.spacing(4),
                fontSize: theme.typography.pxToRem(26),
            },
        },
        contactUsSubTitle: {
            fontWeight: 500,

            color: "#F5F5F5",

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(16),
            },
        }
    }
})



export default function ContactSection() {
    const { classes } = useStyles()

    return (
        <section className={ classes.contactUsRoot }>
            <div className={ classes.contactUsSubRoot }>
                <div className={ classes.contactUsText }>
                    <h3 className={ classes.contactUsTitle }>
                        { `Un projet de télésurveillance ?` }
                    </h3>
                    <p className={ classes.contactUsSubTitle }>
                        { `AD CAM vous conseille et vous transmet une estimation gratuite. Nous intervenons dans un rayon de 50 kilomètres autour d'Orléans.` }
                    </p>
                </div>

                <IconButton icon={ "invoice" } text={ "Demander un devis" } link={ "/contact" } description={ "Contactez-nous pour obtenir un devis 100% gratuit" } isOutside={ false } />
            </div>
        </section>
    )
}
