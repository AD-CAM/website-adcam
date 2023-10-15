'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/glassTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_glass.png"
import glassThree from "../../../../public/ajax/glass/three.jpg"
import glassFour from "../../../../public/ajax/glass/four.jpg"
import glassFive from "../../../../public/ajax/glass/five.gif"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetText } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



export default function GlassSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Détecteur de bris de verre" }
                                isTop={ false }
                                tag={ "Ajax GlassProtect & CombiProtect" }
                                boldTitle={ "Détecteurs acoustiques" }
                                regularTitle={ " de bris de verre" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les détecteurs de bris de glace constituent une couche de protection supplémentaire pour vos biens non seulement contre les intrusions, mais aussi contre le vandalisme et les intempéries. Les détecteurs filaires et sans fil Ajax déclenchent une alarme quand ils détectent deux sons consécutifs : un son d'impact de basse fréquence et un son de verre brisé de haute fréquence. C'est l'algorithme numérique DualTone qui en est responsable."
                                    },
                                    {
                                        type: "regular",
                                        text: "Si des intrus tentent de pénétrer dans une maison par une fenêtre cassée, de casser une vitrine pour voler des marchandises, ou si une branche tombe sur une fenêtre et la brise lors d'une tempête, le système en informe immédiatement les utilisateurs et le centre de télésurveillance. Mais le passage d'une voiture, le tonnerre ou les aboiements d'un chien ne provoquent pas de fausses alarmes. Les détecteurs de bris de glace Ajax existent en deux formats : un mini-détecteur indépendant qui saura s'intégrer dans n'importe quel intérieur, et un détecteur combiné doté d'un capteur de mouvement. Les détecteurs de bris de glace filaires et sans fil sont disponibles dans la gamme de produits Ajax."
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
                            image={ glassThree }
                            alt={ "Compatibilité avec les fournisseurs tiers" }
                            isLeft={ true }
                            boldTitle={ "" }
                            regularTitle={ "Fonctionne avec les appareils de fournisseurs tier" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Les détecteurs de bris de glace GlassProtect Jeweller et GlassProtect Fibra sont équipés de bornes permettant de connecter des appareils tiers avec un contact de type NC (normalement fermé). Il peut s'agir de tout type de capteur : mouvement, ouverture, vibration."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ glassFour }
                            alt={ "Installation et configuration simples" }
                            isLeft={ false }
                            boldTitle={ "" }
                            regularTitle={ "Configuration facile" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Aucun démontage n'est nécessaire pour configurer les détecteurs de bris de glace Ajax. La connexion au système et la configuration se font via l'application mobile ou pour PC, où les utilisateurs peuvent également créer des scénarios d'automatisations. Par exemple, vous pouvez programmer la fermeture automatique des volets roulants en cas de fenêtre cassée."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ glassFive }
                            alt={ "Communication longue distance fiable" }
                            isLeft={ true }
                            boldTitle={ "" }
                            regularTitle={ "Utilise une technologie de communication fiable" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Les détecteurs sans fil de bris de glace et les centrales communiquent via le protocole radio Jeweller. Il s'agit d'une technologie TDMA avec un chiffrement puissant. En cas d'interférence radio ou de tentative de brouillage, le système Ajax commute la fréquence radio et avertit les utilisateurs et le centre de télésurveillance de la situation."
                                },
                                {
                                    type: "regular",
                                    text: "Et pour contrôler la communication avec les appareils filaires, les centrales utilisent le protocole Fibra, une technologie filaire de génération numérique. Fibra combine la fiabilité des fils avec la liberté offerte par la communication radio."
                                }
                            ] }
                />
            </div>
        </section>
    )
}
