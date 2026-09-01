'use client'
/* Assets Imports */
import accessBanner from "../../../../public/banners/access_stock_photo.jpg"
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
                                image={ accessBanner }
                                alt={ "Contrôle d'accès AD CAM" }
                                isTop={ true }
                                tag={ "" }
                                boldTitle={ "Contrôle d'accès" }
                                regularTitle={ " sur mesure par nos soins" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Gérez et sécurisez les accès de vos bâtiments: badges, biométrie, plages horaires et historique, installés et configurés par AD CAM."
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
