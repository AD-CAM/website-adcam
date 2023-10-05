'use client'
/* Data & Types Imports */
const placeholderTechSheetsList = require("../_pageData/placeholderTechSheetsList.json")
/* Assets Imports */
import ajaxAlarmBanner from "../../../../public/ajax/banner-ajax_products.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetText } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "80%",
        },
        youtubeContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "650px",
                maxWidth: "90%",
            },
        },
    }
})



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

            <div className={ classes.subRoot }>
                {
                    placeholderTechSheetsList.map((techSheetData: TechSheetData, index: number) => {
                        return <TechSheetList 
                                            key={ index }
                                            image={ techSheetData.image }
                                            alt={ techSheetData.alt }
                                            isLeft={ techSheetData.isLeft }
                                            boldTitle={ techSheetData.boldTitle }
                                            regularTitle={ techSheetData.regularTitle }
                                            subTitle={ techSheetData.subTitle }
                                            techSheet={ techSheetData.techSheet }
                                />
                    })
                }

                <TechSheetText 
                            image={ ajaxAlarmBanner }
                            alt={ "Alarme AJAX" }
                            isLeft={ true }
                            boldTitle={ "Protection " }
                            regularTitle={ "maximale" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Si la fuite est petite ou si de l'eau s'infiltre accidentellement sur le contact, le détecteur signale l'évaporation aussi rapidement qu'une fuite. En cas de fuite, le détecteur peut exécuter un scénario qui coupe automatiquement l'arrivée d'eau, vous ne serez donc pas obligé de vous précipiter sur le lieu de l'inondation en cas d'alarme."
                                },
                                {
                                    type: "bold",
                                    text: "Peut être couplé à une valve électrique"
                                },
                                {
                                    type: "regular",
                                    text: "Outre la protection contre le vol et l’incendie, le système de sécurité Ajax peut empêcher l’inondation d’un site due à la rupture d’un tuyau ou à la défaillance d’un équipement de plomberie. Pour mettre en œuvre le système anti-inondation, vous aurez besoin d’un détecteur de fuite d’eau LeaksProtect, d’une électrovanne compatible ainsi que d’un relais WallSwitch ou Relay. Grâce au relais, vous pouvez couper l’alimentation en eau manuellement – avec l’application – ou automatiquement : par l’alarme du détecteur de fuites, par planning ou en changeant le mode de sécurité."
                                }
                            ] }
                />
            </div>
        </section>
    )
}
