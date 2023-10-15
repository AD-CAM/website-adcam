'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/sirenTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_siren.png"
import sirensFour from "../../../../public/ajax/sirens/four.jpg"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetSubSectionBanner, TechSheetText } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



export default function SirenSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Alarmes et sirènes AJAX" }
                                isTop={ false }
                                tag={ "Sirènes Ajax - intérieures et extérieures" }
                                boldTitle={ "Sirènes" }
                                regularTitle={ " Ajax" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Une sirène est le seul élément du système qui devrait attirer l'attention. C'est pourquoi c'est la première chose que les intrus essayent de désactiver. Les sirènes Ajax sont protégées contre le vandalisme et possèdent un avertisseur sonore puissant capable d'attirer l'attention d'un quartier entier."
                                    },
                                    {
                                        type: "regular",
                                        text: "Un avertisseur sonore et un éclairage LED puissant, un boîtier résistant aux intempéries et un accéléromètre intégré qui notifie en cas de tentative de démontage de la sirène : tous ces éléments essentiels sont combinés dans cette sirène pour assurer la protection d'un chalet, d'un domicile ou d'un bureau. Et la fixation spéciale pour une plaque professionnelle vous permet non seulement de protéger votre propriété, mais aussi de faire de la publicité pour les services des entreprises de sécurité ou de services."
                                    },
                                    {
                                        type: "regular",
                                        text: "Le boîtier compact et minimaliste de la sirène intérieure contient un avertisseur sonore puissant et un système anti-sabotage, qui prévient si la sirène est retirée de son support. Les sirènes Ajax servent également d'indicateurs de l'état du système de sécurité, des temporisations à l'armement et au désarmement, et de l'ouverture des portes lorsque le système est désarmé. Les sirènes filaires et sans fil sont disponibles dans la gamme de produits Ajax."
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
                            image={ sirensFour }
                            alt={ "Sirènes actives en toute condition" }
                            isLeft={ false }
                            boldTitle={ "" }
                            regularTitle={ "Fonctionnement dans toutes les conditions" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Les sirènes extérieures Ajax résistent à la chaleur, au froid et aux vents violents sans aucune difficulté. Elles fonctionnent sur une plage de température de -25°C à +60°C, et le boîtier possède un indice de protection IP54. Toute tentative de retirer la sirène extérieure de son support, déclenche une alarme, grâce au bouton anti-sabotage et à l'accéléromètre intégrés. Les sirènes sans fil sont entièrement autonomes et restent actives même si le courant est coupé. Le bouton de désactivation est verrouillé en mode armé. Les batteries intégrées durent plusieurs années et la sirène notifie à l'avance lorsqu'elles doivent être remplacées. Les sirènes extérieures filaires sont équipées d'une batterie de secours, de sorte que même si la ligne Fibra tombe en panne, la sirène continue de déclencher l'alarme."
                                }
                            ] }
                />
            </div>
        </section>
    )
}
