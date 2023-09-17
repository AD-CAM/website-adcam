'use client'
/* Assets Imports */
import adCamFullLogo from "public/logos/logo-full_black.png"
import accessControlOne from "public/access_control/access-control-one.jpg"
import accessControlTwo from "public/access_control/access-control-two.jpg"
import accessControlThree from "public/access_control/access-control-three.webp"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
import { useMediaQuery, useTheme } from "@mui/material"
/* Components Imports */
import { SectionTitle, ImageTitle } from '../../_components/SectionTitle'
import ImagedArticle from '../../_components/ImagedArticle'
import { IconButton } from "../../_components/Button"



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
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
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

    /* ` }<strong>{ `` }</strong>{ ` */
    /* <p>{ `` }</p> */



    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <div className={ classes.sectionTitleHolder }>
                    <SectionTitle text={ "Contrôle d'accès" } />
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ accessControlOne } alt={ `Système de contrôle d'accès par digicode` } isLeft={ false } title={ `Faites appel à AD CAM pour vous garantir un accès sécurisé à votre bâtiment` }>
                        <p>{ `Que vous ayez un ou plusieurs bâtiments à sécuriser et quelle que soit le nombre d'utilisateurs, ` }<strong>{ `AD CAM` }</strong>{ ` propose des solutions de contrôle d'accès souples et modulaires, adaptées aux besoins de chaque client : ` }<strong>{ `multi-sites, multi-bâtiments, multi-postes...` }</strong></p>
                        <p><strong>{ `Le contrôle d'accès` }</strong>{ ` consiste à s’assurer qu’un individu a bien les droits nécessaires pour accéder à un lieu, un édifice ou un local. Il permet d’organiser la circulation des personnes à l’intérieur d’un site et de gérer l’accès aux différentes zones de façon sélective. ` }</p>
                        <p>{ `Ainsi, ` }<strong>{ `l’accès à des espaces sensibles peut être restreint` }</strong>{ ` à certains utilisateurs, selon des plages horaires prédéfinies, avec un enregistrement de tous les déplacements dans un historique.` }</p> 
                    </ImagedArticle>
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ accessControlTwo } alt={ `Système de contrôle d'accès magnétique` } isLeft={ true } title={ `Comment contrôler les accès ?` }>
                        <p><strong>{ `L'identification` }</strong>{ ` consiste à vérifier qu'une personne a l'autorisation d'accéder à une zone ou à un bâtiment. Lorsque la personne présente sa carte d'identité à un lecteur placé près de la porte, le système ouvre ou non la porte.` }</p>
                        <p>{ `L'identification, selon la technologie utilisée, est représentée par une carte ou un badge contenant des informations enregistrées. Il peut s'agir d'un porte-clés, d'une télécommande, de données biométriques ou d'un numéro d'immatriculation de véhicule...` }</p>
                        <p><strong>{ `Les badges` }</strong>{ ` sont une solution très courante pour le contrôle d'accès. Pour entrer dans un bâtiment, la personne doit présenter un badge valide à un lecteur. Le badge est la "clé" du système et le lecteur saisit les informations enregistrées sur le badge.` }</p>
                    </ImagedArticle>
                </div>
                <div className={ classes.sectionTitleHolder }>
                    <SectionTitle text={ "Les différentes technologies" } />
                </div>
                <div className={ classes.sectionTitleHolder }>
                    <ImageTitle image={ adCamFullLogo } alt={ `AD CAM, Installateur de systèmes de sécurité à Orléans` } width={ "350px" } />
                </div>
                <div className={ classes.textContainer }>
                    <p className={ classes.textParagraph }></p>
                </div>
                <div className={ classes.contactUsArea }>
                    <h3 className={ classes.contactUsTitle }>
                        { `Nos solutions en matière de contrôle d'accès vous intéressent ? AD CAM est à votre disposition pour vous conseiller et vous transmettre une estimation des coûts gratuite ! Nous intervenons dans un rayon de 50 kilomètres autour d'Orléans.` }
                    </h3>
                    <IconButton icon={ "invoice" } text={ `Devis 100% gratuit` } link={ "/contact" } description={ `Contactez-nous pour obtenir un devis 100% gratuit` }/>
                </div>
            </div>
        </section>
    )
}
