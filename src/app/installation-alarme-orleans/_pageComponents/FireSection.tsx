'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/fireTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_motion.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import YouTube from "react-youtube"
/* Components Imports */
import { TechSheetBanner, TechSheetList, TechSheetSubSectionBanner } from '@/app/_components/TechSheet'
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
                width: "1100px",
                maxWidth: "90%",
            },
        },
    }
})



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
                                        text: "Les détecteurs d'incendie font partie intégrante du système de sécurité Ajax, ils alertent les utilisateurs via les sirènes connectées au système, l'application mobile, par SMS ou appel téléphonique. Si plusieurs détecteurs sont connectés au hub ils peuvent activer une alarme de façon synchronisée si l'un d'entre eux est déclenché. Ce système d'alarmes interconnectées augmente considérablement les chances que toutes les personnes présentes sur le lieu de l'incendie soient rapidement informées de la situation."
                                    },
                                    {
                                        type: "regular",
                                        text: "Leurs deux batteries et leur sirène intégrée permettent aux détecteurs d'incendie Ajax d'informer les utilisateurs en cas de danger, indépendamment de l'état de l'alimentation ou de la connexion au panneau de contrôle."
                                    }
                                ] }
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
