'use client'
/* Data & Types Imports */
const hubTechSheetsList = require("../_pageData/hubTechSheetsList.json")
/* Assets Imports */
import ajaxHubBanner from "../../../../public/ajax/banner-ajax_hubs.png"
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
                width: "1100px",
                maxWidth: "90%",
            },
        },
    }
})



export default function HubSection() {
    const { classes } = useStyles()

    const opts = {
        playerVars: {
          autoplay: 1,
        },
    }

    const onReady = (event: any) => {
        event.target.pauseVideo()
    }



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxHubBanner }
                                alt={ "Alarme AJAX" }
                                isTop={ true }
                                tag={ "Ajax Hubs" }
                                boldTitle={ "Centrale" }
                                regularTitle={ " du système d'alarme pour une sécurité intelligente" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Hub est un une centrale d’alarme du système de sécurité entièrement repensé. La centrale Ajax sert de station centrale à tous les appareils du système, elle prévient instantanément les utilisateurs et les centres de télésurveillance lorsqu'une alarme se déclenche sur un site protégé. Plusieurs réseaux de communication garantissent une communication stable même en cas d'interférence ou de panne de courant."
                                    },
                                    {
                                        type: "regular",
                                        text: "Toutes les centrales Ajax sont équipées d'une batterie de secours offrant jusqu'à 60 heures d'autonomie hors alimentation électrique sur réseau. Avec l'ajout d'un bloc d'alimentation basse tension et d'une batterie externe, l'autonomie de la centrale peut être prolongée pendant plusieurs semaines, voire des mois."
                                    },
                                    {
                                        type: "regular",
                                        text: "Les centrales n'ont pas de clavier, la gestion et la configuration du système se font via l'application Ajax. L'intervention de l'utilisateur peut également être minimisée. Les centrales peuvent prendre en charge jusqu'à 64 scénarios d'automatisation qui permettent de planifier le changement des modes de sécurité, de réduire les actions routinières et de contrer activement les menaces. Selon le modèle, les centrales prennent en charge la connexion des appareils Ajax filaires et sans fil."
                                    }
                                ] }
            />

            <div className={ classes.subRoot }>
                {
                    hubTechSheetsList.map((techSheetData: TechSheetData, index: number) => {
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
                            image={ ajaxHubBanner }
                            alt={ "Mises à jour à distance automatiques" }
                            isLeft={ false }
                            boldTitle={ "Mises à jour" }
                            regularTitle={ " régulières" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Grâce aux mises à jour logicielles, les centrales reçoivent régulièrement de nouvelles fonctionnalités. Elles assurent l'évolution du système de sécurité, la prise en charge de nouveaux appareils et optimisent l'expérience utilisateur. Les mises à jour s'installent de façon automatique, à distance, lorsque le système est désarmé. Et oui, c'est gratuit."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ ajaxHubBanner }
                            alt={ "Protection contre les acteurs malicieux" }
                            isLeft={ true }
                            boldTitle={ "Logiciel protégé" }
                            regularTitle={ " contre le piratage" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Les centrales d'alarme du système Ajax fonctionnent sur OS Malevich, un système d'exploitation propriétaire en temps réel. OS Malevich est protégé contre les cyberattaques et les virus. Ce type de logiciel est utilisé pour contrôler les freins des voitures et les vaisseaux spatiaux, ce qui démontre bien la fiabilité du système Ajax par rapport aux erreurs."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ ajaxHubBanner }
                            alt={ "Stabilité de la communication" }
                            isLeft={ false }
                            boldTitle={ "Communication" }
                            regularTitle={ " stable" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Le hub garantit la transmission des alarmes et des photos d'une installation via l'un des canaux de communication disponibles. Selon le modèle, le hub peut disposer d'un maximum de 4 canaux, Ethernet, Wi-Fi et deux cartes SIM. Ils fonctionnent simultanément et commutent en cas d'urgence. La commutation entre les canaux prend quelques secondes. Jeweller et Wings sont des technologies radio propriétaires, qui permettent un chiffrement fiable des données lors de la communication entre appareils. En cas d'interférence ou de tentative de brouillage, Ajax modifie la fréquence radio, et informe les utilisateurs et le centre de télésurveillance de la situation. Pour contrôler la communication avec les appareils filaires, les centrales utilisent le protocole Fibra, une technologie filaire de génération numérique. Fibra combine la fiabilité des fils avec la liberté offerte par la communication radio."
                                }
                            ] }
                />
            </div>
        </section>
    )
}
