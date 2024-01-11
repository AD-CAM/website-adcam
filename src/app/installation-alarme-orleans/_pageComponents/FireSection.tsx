'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/fireTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_fire.png"
/* Library Imports */
import useStyles from "../_styles/sectionStyling"
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetSubSectionBanner } from '@/app/_components/TechSheet'
import { TechSheetData } from '@/app/_types/dataFiles'



export default function FireSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Détecteur d'incendie AJAX" }
                                isTop={ false }
                                tag={ "Ajax Systems" }
                                boldTitle={ "Détecteurs d'incendie" }
                                regularTitle={ " entièrement autonomes" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Le système anti-incendie du système de sécurité Ajax est composé de détecteurs d'incendie sans fil qui alertent instantanément en cas de détection de fumée ou de hausse de température rapide. La combinaison d'un détecteur d'incendie et de monoxyde prévient les empoisonnements par CO, qui sont mortels."
                                    },
                                    {
                                        type: "regular",
                                        text: "La chambre optique unique ne nécessite pas de nettoyage régulier, le capteur à double spectre distingue la fumée de la vapeur, la thermistance réagit rapidement aux matériaux synthétiques en combustion et un logiciel sophistiqué minimise les déclenchements intempestifs. Grâce à une conception bien pensée, ainsi qu'aux paramètres intégrés à l'application, l'installation est simple et rapide. Tout est conforme aux normes de sécurité incendie les plus modernes."
                                    },
                                    {
                                        type: "regular",
                                        text: "Leurs deux batteries et leur sirène intégrée permettent aux détecteurs d'incendie Ajax d'informer les utilisateurs en cas de danger, indépendamment de l'état de l'alimentation ou de la connexion au panneau de contrôle."
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
