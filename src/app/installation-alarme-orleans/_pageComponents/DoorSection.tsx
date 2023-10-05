'use client'
/* Data & Types Imports */
const techSheetsList = require("../_pageData/doorTechSheetsList.json")
/* Assets Imports */
import ajaxBanner from "../../../../public/ajax/banner-ajax_door.png"
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



export default function DoorSection() {
    const { classes } = useStyles()



    return (      
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ ajaxBanner }
                                alt={ "Hub de sécurité AJAX" }
                                isTop={ false }
                                tag={ "Ajax Détecteurs d'ouverture" }
                                boldTitle={ "Bien plus" }
                                regularTitle={ " que des simples contacts magnétiques" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Les détecteurs d'ouverture sans fil et filaires Ajax se composent de deux parties : des interrupteurs reed et un aimant situé dans un boîtier séparé. Un interrupteur reed est un contact électrique situé dans un boîtier scellé qui se ferme à l'approche de l'aimant et s'ouvre lorsque l'aimant est éloigné de plus de 1 cm. De cette manière, le capteur de contact magnétique enregistre à la fois l'ouverture et la fermeture, et le système de sécurité avertit les utilisateurs et le centre de télésurveillance."
                                    },
                                    {
                                        type: "regular",
                                        text: "Les détecteurs d'ouverture de porte et de fenêtre sont un élément essentiel de tout système de sécurité. Les détecteurs d'ouverture intégrés au système de sécurité Ajax, peuvent déclencher une sirène, exécuter des scénarios d'automatisation et intégrer des capteurs tiers, ces fonctions les rendent indispensables pour votre système de domotique. Les détecteurs d'ouverture Ajax filaires et sans fil sont disponibles dans la gamme de produits."
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

                <TechSheetText 
                            image={ ajaxBanner }
                            alt={ "Détection de la moindre ouverture" }
                            isLeft={ false }
                            boldTitle={ "Détectez les intrus" }
                            regularTitle={ " avant même qu'ils n'entrent dans un local" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "En plus de la fonction de capteur magnétique, les détecteurs d'ouverture Ajax peuvent détecter les vibrations puissantes, enregistrer un changement dans l'angle d'inclinaison et recevoir les signaux de capteurs filaires tiers. L'alarme est déclenchée si quelqu'un essaye de fracturer ou de démonter votre porte. En installant un interrupteur de fin de course dans le cadre de la porte et en le détecteur de vibration, vous obtiendrez une alarme de verrouillage de porte cachée."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ ajaxBanner }
                            alt={ "Protection contre l'ouverture des fenêtres" }
                            isLeft={ true }
                            boldTitle={ "" }
                            regularTitle={ "Alliez sécurité et confort" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "L'accéléromètre intégré au détecteur vous permet d'aérer vos pièces avec des fenêtres conventionnelles ou des lucarnes. Si l'angle de la fenêtre change de plus de 5°, le système de sécurité se déclenche et appelle une patrouille de la société de sécurité."
                                }
                            ] }
                />
                <TechSheetText 
                            image={ ajaxBanner }
                            alt={ "Compatibilité avec les fournisseurs tiers" }
                            isLeft={ false }
                            boldTitle={ "" }
                            regularTitle={ "Rendez les capteurs de fournisseurs tiers intelligents" }
                            text={ [
                                {
                                    type: "regular",
                                    text: "Avec DoorProtect Plus Jeweller ou DoorProtect Plus Fibra, vous pouvez intégrer un détecteur de mouvement de volet roulant au système de sécurité Ajax et définir les conditions qui déclencheront l'alarme dans l'application mobile."
                                }
                            ] }
                />
            </div>
        </section>
    )
}
