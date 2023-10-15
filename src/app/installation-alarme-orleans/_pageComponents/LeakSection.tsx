'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/leakTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_leaks.png"
import leaksTwo from "../../../../public/ajax/leaks/two.jpg"
import leaksThree from "../../../../public/ajax/leaks/three.jpg"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetText } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



export default function LeakSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Détecteur de fuite d'eau AJAX" }
                                isTop={ false }
                                tag={ "Ajax Security" }
                                boldTitle={ "Détecteurs de fuites d'eau" }
                                regularTitle={ " sans fil" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les détecteurs de fuites d'eau sans fil Ajax préviennent les inondations dès les premières gouttes. Dès que de l'eau s'infiltre dans l'une des quatre paires de capteurs, le système déclenche une alarme. Une notification est envoyée aux utilisateurs et au centre de télésurveillance. En programmant une électrovanne via le dispositif Relay, le système de sécurité Ajax peut couper l'eau automatiquement jusqu'à l'arrivée du plombier."
                                    }
                                ] }
                                transparent={ true }
            />

            <div className={ classes.subRoot }>
                {
                    techSheetsList.map((techSheetData: TechSheetData, index: number) => {
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
                            image={ leaksTwo }
                            alt={ "Installation très simple" }
                            isLeft={ false }
                            boldTitle={ "" }
                            regularTitle={ "Rien de compliqué" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Les détecteur de fuite d'eau Ajax sont alimentés par des piles qui doivent être remplacées après quelques années. Aucun outil n'est requis pour installer le détecteur. Il suffit de le poser à un endroit où une fuite est possible, par exemple sous un évier ou une baignoire. Le détecteur résiste à la poussière et à l'humidité, et son petit boîtier lui permet d'être placé à des endroits difficiles d'accès."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ leaksThree }
                            alt={ "Détecte très efficacement les fuites" }
                            isLeft={ true }
                            boldTitle={ "Protection" }
                            regularTitle={ " maximale" }
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
