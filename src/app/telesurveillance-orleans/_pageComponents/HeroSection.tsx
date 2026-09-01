'use client'
/* Assets Imports */
import heroBanner from "../../../../public/banners/telesurveillance_stock_photo.jpeg"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { TechSheetBanner } from '@/app/_components/TechSheet'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(16),
            },
        },
    }
})



export default function HeroSection() {
    const { classes } = useStyles()



    return (
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ heroBanner }
                                alt={ "Télésurveillance AD CAM" }
                                isTop={ true }
                                tag={ "" }
                                boldTitle={ "La télésurveillance" }
                                regularTitle={ " au service de votre sécurité" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Une surveillance de vos locaux 24h/24, reliée à un centre de télésurveillance certifié APSAD P5, installée et suivie de bout en bout par AD CAM."
                                    }
                                ] }
                                transparent={ false }
                                ctaText={ "Demander un devis" }
                                ctaLink={ "/contact" }
                                ctaDescription={ "Contactez-nous pour obtenir un devis 100% gratuit" }
            />
        </section>
    )
}
