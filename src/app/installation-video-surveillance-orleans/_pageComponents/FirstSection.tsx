'use client'
/* Assets Imports */
import adCamFullLogo from "public/ad-cam_logo-title_nobg.png"
import cameraOne from "public/camera-image_one.png"
import cameraTwo from "public/camera-image_two.png"

import cameraTube from "public/cameras/camera-tube.jpg"
import cameraDome from "public/cameras/camera-dome.png"
import cameraFisheye from "public/cameras/camera-fisheye.jpg"

import cameraMall from "public/cameras/camera_mall.jpg"
import cameraWarehouse from "public/cameras/camera_warehouse.jpg"
import cameraBuilding from "public/cameras/camera_building.jpg"

import cameraFullCloud from "public/cameras/full-cloud.png"
import cameraRemote from "public/cameras/full-remote-control.jpg"
import cameraTelesurveillance from "public/cameras/telesurveillance.jpeg"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
/* Components Imports */
import { SectionTitle, ImageTitle } from '../../_components/SectionTitle'
import ImagedArticle from '../../_components/ImagedArticle'
import { useMediaQuery, useTheme } from "@mui/material"
import { IconButton } from "../../_components/Button"
import ImageGrid from "../../_components/ImageGrid"



const imageGridArray = [
    [
        {
            image: cameraTube,
            alt: 'Caméra "tube"',
        },
        {
            image: cameraBuilding,
            alt: 'Caméra de bâtiment',
        },
        {
            image: cameraRemote,
            alt: 'Système automatique full-remote',
        }
    ],
    [
        {
            image: cameraDome,
            alt: 'Caméra "dome"',
        },
        {
            image: cameraWarehouse,
            alt: `Caméra d'entrepôt ou d'usine`,
        },
        {
            image: cameraFullCloud,
            alt: 'Système entièrement connecté au cloud',
        }
    ],
    [
        {
            image: cameraFisheye,
            alt: 'Caméra "fisheye"',
        },
        {
            image: cameraMall,
            alt: 'Caméra de supermarché',
        },
        {
            image: cameraTelesurveillance,
            alt: 'Surveillance contre le cambriolage',
        }
    ]
]



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",

            paddingTop: theme.spacing(10),

            boxShadow: "0px -50px 25px -50px rgba(0, 0, 0, 0.3)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1450px",

            [theme.breakpoints.up('sm')]: {
                paddingLeft: theme.spacing(6),
                paddingRight: theme.spacing(6),   
            },
        },
        imageContainer: {

        },
        sectionTitleHolder: {
            width: "100%",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",   
            },
        },
        articleContainer: {
            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",
            },
        },
        textParagraph: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: 400,
    
            color: "rgba(41, 41, 41, 1)",
        },
        textContainer: {
            width: "100%",
            boxSizing: "border-box",

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(6),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",
                marginBottom: theme.spacing(4),
            },
        },
        contactUsArea: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            marginTop: theme.spacing(6),

            [theme.breakpoints.down('sm')]: {
                maxWidth: "90%",
                marginBottom: theme.spacing(6),
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "1050px",
                marginBottom: theme.spacing(4),
            },
        },
        contactUsTitle: {
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(18),
        },
    }
})



export default function FirstSection() {
    const { classes } = useStyles()

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.sectionTitleHolder }>
                    <SectionTitle text={ "Installation de caméras" } />
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ cameraOne } alt={ `Système de vidéosurveillance à distance` } isLeft={ false } title={ `Faites appel à AD CAM pour sécuriser votre résidence ou votre entreprise` }>
                        <p>{ `Les avantages de la vidéo surveillance sont multiples. Ce système de protection peut être installé (presque) partout pour en assurer la surveillance.` }</p>
                        <p>{ `Les œuvres des malfaiteurs et les différents accidents perturbent notre paix au quotidien. C’est pourquoi il est nécessaire d’installer un système de ` }<strong>{ `vidéo surveillance.` }</strong>{ ` AD CAM est spécialisé dans les systèmes de sécurité à ` }<strong>{ `Orléans` }</strong>{ `, il vous fait profiter des avantages de la technologie sur la sécurité. Soyez au courant de tout événement, avec une simplicité d’accès.` }</p>
                        <p>{ `Vous êtes propriétaire d’une boutique ? Vous souhaitez que vos clients se sentent en sécurité, en faisant leurs achats chez vous ? Vous souhaitez faire avancer  les enquêtes en cas de vol le plus rapidement possible ? Vous aimeriez savoir en détail le déroulement des activités dans votre entreprise ? Ou vous voulez simplement assurer la garde de votre domicile ? Dans tous les cas, nous avons la solution qu’il vous faut. Optez pour la mise en place d’une ` }<strong>{ `vidéo surveillance` }</strong>{ ` dans votre propriété. Nos compétences en pose et la diversité de modèles que nous vous proposons sauront vous protéger.` }</p>
                    </ImagedArticle>
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ cameraTwo } alt={ `Système d'alarme AJAX avec contrôle à distance et sirène` } isLeft={ true } title={ `Pourquoi choisir une alarme ?` }>
                    <p>{ `Avec notre entreprise, vous pouvez profiter d’une ` }<strong>{ `caméra de surveillance performante.` }</strong>{ ` Un emplacement discret et une gamme d’appareils parfaitement adaptés font la notoriété de notre service. Dans le but d’optimiser votre protection, nos techniciens qualifiés:` }</p>
                    <ul style={{ paddingLeft: "20px", }}>
                        <li>{ `Détectent l’emplacement stratégique pour l’installation de l’équipement, pour assurer la qualité des images d’informations et la discrétion de l’appareil` }</li>
                        <li>{ `Assurent la liaison de la caméra au routeur avant de bien la fixer` }</li>
                        <li>{ `Protègent le dispositif et ses accessoires contre les intempéries` }</li>
                    </ul>
                    </ImagedArticle>
                </div>
                <div className={ classes.sectionTitleHolder }>
                    <ImageTitle image={ adCamFullLogo } alt={ `AD CAM, Installateur de systèmes de télésurveillance à Orléans` } width={ "350px" } />
                </div>
                <div className={ classes.textContainer }>
                    <p className={ classes.textParagraph }>{ `Notre équipe est habilitée à installer des dispositifs de vidéosurveillance. Nous intervenons chez vous en toute discrétion et nous nous chargeons de l’installation de caméras de vidéo dans les pièces potentiellement sensibles qui donnent directement sur l’extérieur. Nous vous assurons une couverture totale des pièces à surveiller par nos caméras. Choisissez parmi nos différents dispositifs : caméra avec détecteur de mouvements, avec détecteur thermique, etc. Une photo ou une vidéo est prise lorsque quelque chose d’anormal est détecté et vous pouvez en être informé par téléphone, voire les visualiser depuis votre smartphone.` }</p>
                    <p className={ classes.textParagraph }>{ `Pour plus de sérénité, nous installons également des enregistreurs pour conserver un historique des vidéos. En complément, nous proposons également la création d’un réseau informatique vous permettant à tout moment de consulter vos caméras via un ordinateur, votre téléphone portable ou encore votre tablette.` }</p>
                </div>
                <ImageGrid imageArray={ imageGridArray } />
            </div>
        </section>
    )
}
