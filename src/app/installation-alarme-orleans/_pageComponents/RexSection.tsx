'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/rexTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_rex.jpg"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetSubSectionBanner } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



export default function RexSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Prolongateur de portée de signal AJAX" }
                                isTop={ false }
                                tag={ "Ajax ReX" }
                                boldTitle={ "Prolongateurs" }
                                regularTitle={ " de portée du signal radio" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Vous pouvez élargir le champ d'action de votre système en toute simplicité avec les prolongateurs de portée. Ils sont très utiles pour connecter des appareils au système Ajax dans des bâtiments à plusieurs étages ou dans un bâtiment avec une annexe séparée ou éloignée du hub. ReX garantit un système de sécurité avec une connexion stable entre les différents appareils, offrant une protection complète et sans faille."
                                    },
                                    {
                                        type: "regular",
                                        text: "Les appareils connectés via le prolongateur de portée forment un groupe autonome dans le système. Même si le hub est endommagé ou si la connexion est perdue, le prolongateur de portée déclenche une alarme et la sirène pour attirer l'attention."
                                    },
                                    {
                                        type: "regular",
                                        text: "Les prolongateurs de portée fonctionne sur OS Malevich, le système d'exploitation en temps réel qui gère également les hubs Ajax. Le système d'exploitation assure leur parfaite compatibilité. OS Malevich est protégé contre les cyberattaques et résiste au piratage, et toutes les données transmises sont chiffrées. Même en cas de panne de courant soudaine, le prolongateur de portée peut fonctionner jusqu'à 38 heures."
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
            </div>
        </section>
    )
}
