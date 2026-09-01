'use client'
/* Assets Imports */
import contactBanner from "../../../../public/banners/contact_stock_photo.jpg"
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
                                image={ contactBanner }
                                alt={ "Contactez AD CAM" }
                                isTop={ true }
                                tag={ "" }
                                boldTitle={ "Contactez" }
                                regularTitle={ " AD CAM" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Une question, un projet, un devis ? Notre équipe vous répond et vous accompagne dans un rayon de 50 kilomètres autour d'Orléans."
                                    }
                                ] }
                                transparent={ false }
            />
        </section>
    )
}
