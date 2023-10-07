'use client'
/* Data & Types Imports */
const placeholderTechSheetsList = require("../_pageData/placeholderTechSheetsList.json")
/* Assets Imports */
import ajaxAlarmBanner from "../../../../public/ajax/banner-ajax_products.png"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetText } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



export default function FirstSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxAlarmBanner }
                                alt={ "Alarme AJAX" }
                                isTop={ true }
                                tag={ "" }
                                boldTitle={ "L'Art" }
                                regularTitle={ " de se défendre" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les systèmes de sécurité AJAX sont les meilleurs et les plus modernes des systèmes de sécurité sans fil disponibles sur le marché. Protégez votre maison, votre entreprise ou même votre usine avec les détecteurs d'AJAX Systems. Détectez les cambrioleurs, les incendies ou les dégâts des eaux en une fraction de seconde et évitez les dommages à vos biens de valeur."
                                    }
                                ] }
            />

            <div className={ classes.youtubeContainer }>
                <YouTube videoId={ `gdeDCNWoMGg` } className={ "youtubeContainer" } />
            </div>
        </section>
    )
}
