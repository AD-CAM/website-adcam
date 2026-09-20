'use client'
/* Assets Imports */
import AJAXBannerImage from "../../../../public/dahua/banner-ajax.png"
import AJAXDomeCam from "../../../../public/dahua/ajax-dome.jpg"
import AJAXTurretCam from "../../../../public/dahua/ajax-turret.jpg"
import AJAXNVR from "../../../../public/dahua/ajax-nvr.jpg"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { TechSheetBanner, TechSheetText } from '@/app/_components/TechSheet'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            [theme.breakpoints.down('lg')]: {
                width: "1100px",
                maxWidth: "90%",
            },
            [theme.breakpoints.up('lg')]: {
                width: "100%",
                maxWidth: "1100px",
            },
        },
    }
})



export default function ThirdSection() {
    const { classes } = useStyles()



    return (
        <section className={ classes.root }>
            <TechSheetBanner
                                image={ AJAXBannerImage }
                                alt={ "Système de vidéosurveillance AJAX" }
                                isTop={ false }
                                tag={ "Ajax Dispositifs vidéo filaires" }
                                boldTitle={ "Vidéosurveillance" }
                                regularTitle={ "" }
                                text={ [
                                    {
                                        type: "regular",
                                        text: "Maîtrisez le flux de la caméra grâce à des paramètres de confidentialité précis pour chaque utilisateur du système. Profitez d'une navigation fluide et rapide grâce à une interface intuitive dotée d'une technologie de streaming de pointe. Le matériel conforme à la NDAA, basé sur les technologies logicielles de pointe et l'intelligence artificielle, fournit une image claire au moment où vous en avez besoin."
                                    },
                                    {
                                        type: "regular",
                                        text: "Découvrez toute une gamme d'objectifs polyvalents adaptés à vos besoins spécifiques. Que vous ayez besoin d'une perspective plus large pour les installations extérieures ou d'une mise au point plus rapprochée pour les couloirs et les espaces fermés, l'objectif répondra à vos besoins. Optez pour plus de mégapixels pour surveiller des zones étendues ou pour moins de mégapixels lorsque l'espace est limité et qu'un niveau de détail très élevé n'est pas une priorité."
                                    }
                                ] }
                                transparent={ false }
            />

            <div className={ classes.subRoot }>
                <TechSheetText
                            image={ AJAXDomeCam }
                            alt={ "AJAX DomeCam Mini" }
                            isLeft={ false }
                            boldTitle={ "DomeCam" }
                            regularTitle={ " Mini" }
                            text={ [
                                {
                                    type: "bold",
                                    text: "Caméra IP filaire"
                                },
                                {   type: "list", text: "• Disponible en 5MP (2,8 mm ou 4 mm) et 8MP (2,8 mm ou 4 mm)" },
                                {   type: "list", text: "• 2 couleurs disponibles (noir et blanc)" },
                                {   type: "list", text: "• Authentification sécurisée de la caméra sans mot de passe" },
                                {   type: "list", text: "• Vérification instantanée des alarmes en haute résolution" },
                                {   type: "list", text: "• Reconnaissance intégrée de l'IA" },
                                {   type: "list", text: "• Mur d'images virtuel personnalisable" },
                                {   type: "list", text: "• Navigation rapide dans les archives grâce au double flux" },
                                {   type: "list", text: "• Portée de l'éclairage IR jusqu'à 15m" },
                                {   type: "list", text: "• Microphone numérique intégré" },
                                {   type: "list", text: "• Zone de détection de mouvement personnalisable" },
                                {   type: "list", text: "• Synchronisation des archives avec les événements du système" },
                                {   type: "list", text: "• Prise en charge d'une carte SD jusqu'à 256 Go" },
                                {   type: "list", text: "• Sécurité des comptes à plusieurs niveaux" },
                                {   type: "list", text: "• Boîtier métallique résistant à l'eau et à la poussière" },
                                {   type: "list", text: "• Prise en charge des codecs H.264/H.265" },
                                {   type: "list", text: "• Télécommande et configuration" }
                            ] }
                />
                <TechSheetText
                            image={ AJAXTurretCam }
                            alt={ "AJAX TurretCam" }
                            isLeft={ true }
                            boldTitle={ "TurretCam" }
                            regularTitle={ "" }
                            text={ [
                                {
                                    type: "bold",
                                    text: "Caméra IP filaire"
                                },
                                {   type: "list", text: "• Disponible en 5MP (2,8 mm ou 4 mm) et 8MP (2,8 mm ou 4 mm)" },
                                {   type: "list", text: "• 2 couleurs disponibles (noir et blanc)" },
                                {   type: "list", text: "• Authentification sécurisée de la caméra sans mot de passe" },
                                {   type: "list", text: "• Vérification instantanée des alarmes en haute résolution" },
                                {   type: "list", text: "• Reconnaissance intégrée de l'IA" },
                                {   type: "list", text: "• Mur d'images virtuel personnalisable" },
                                {   type: "list", text: "• Navigation rapide dans les archives grâce au double flux" },
                                {   type: "list", text: "• Portée de l'éclairage IR jusqu'à 35m" },
                                {   type: "list", text: "• Microphone numérique intégré" },
                                {   type: "list", text: "• Zone de détection de mouvement personnalisable" },
                                {   type: "list", text: "• Synchronisation des archives avec les événements du système" },
                                {   type: "list", text: "• Prise en charge d'une carte SD jusqu'à 256 Go" },
                                {   type: "list", text: "• Sécurité des comptes à plusieurs niveaux" },
                                {   type: "list", text: "• Boîtier métallique résistant à l'eau et à la poussière" },
                                {   type: "list", text: "• Prise en charge des codecs H.264/H.265" },
                                {   type: "list", text: "• Télécommande et configuration" }
                            ] }
                />
                <TechSheetText
                            image={ AJAXNVR }
                            alt={ "AJAX NVR" }
                            isLeft={ false }
                            boldTitle={ "Ajax NVR" }
                            regularTitle={ "" }
                            text={ [
                                {
                                    type: "bold",
                                    text: "Enregistreur vidéo réseau - La vidéo au service d'une sécurité de haut niveau"
                                },
                                {
                                    type: "regular",
                                    text: "Le NVR offre une synergie entre la vidéosurveillance et les systèmes Ajax. La vitesse de réponse du système est inégalée, ce qui garantit un accès instantané aux archives vidéo, même lorsque vous êtes en mouvement. Grâce à sa large compatibilité, presque toutes les caméras IP peuvent être intégrées aux systèmes de protection contre les intrusions et d'automatisation. Le NVR est le fruit d'un système de sécurité professionnel auquel des millions d'utilisateurs font confiance dans le monde entier."
                                },
                                {   type: "list", text: "• Disponible en versions 8 canaux / 16 canaux" },
                                {   type: "list", text: "• 2 couleurs disponibles (noir et blanc)" },
                                {   type: "list", text: "• Vérification instantanée des alarmes en haute résolution" },
                                {   type: "list", text: "• Navigation rapide dans les archives grâce à la technologie du double flux" },
                                {   type: "list", text: "• Prise en charge ONVIF/RTSP" },
                                {   type: "list", text: "• Synchronisation des archives avec les événements du système" },
                                {   type: "list", text: "• Détection de mouvement réglable pour les caméras" },
                                {   type: "list", text: "• Mur d'images virtuel personnalisable" },
                                {   type: "list", text: "• Notifications de l'état du disque dur dans l'application" },
                                {   type: "list", text: "• Recherche automatique des caméras sur le réseau pour une connexion rapide" },
                                {   type: "list", text: "• Panneau de montage SmartBracket avec bouton anti-sabotage" },
                                {   type: "list", text: "• Prise en charge d'un disque dur SATA jusqu'à 16 To" },
                                {   type: "list", text: "• Sécurité des comptes à plusieurs niveaux" },
                                {   type: "list", text: "• Prise en charge H.264/H.265" },
                                {   type: "list", text: "• Contrôle et configuration à distance " }
                            ] }
                />
            </div>
        </section>
    )
}
