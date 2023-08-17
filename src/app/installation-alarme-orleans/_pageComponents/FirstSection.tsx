'use client'
/* Assets Imports */
import ajaxAlarmOne from "public/ajax-image_one.png"
import ajaxAlarmTwo from "public/ajax-image_two.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
import YouTube from "react-youtube"
/* Components Imports */
import { SectionTitle } from '../../_components/SectionTitle'
import ImagedArticle from '../../_components/ImagedArticle'
import { useMediaQuery, useTheme } from "@mui/material"



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
        youtubeContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            [theme.breakpoints.down('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.up('sm')]: {
                width: "650px", 
            },
        },
        textParagraph: {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
    
            color: "rgba(41, 41, 41, 1)",
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
                    <SectionTitle text={ "Installation d'alarmes à Orléans" } />
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ ajaxAlarmTwo } alt={ `Système d'alarme automatisé AJAX` } isLeft={ false } title={ `Faites appel à AD CAM pour sécuriser votre résidence ou votre entreprise` }>
                        <p><strong>{ `Explosion des cambriolages après le confinement.` }</strong>{ ` Avec les mesures de confinement prises à la suite de la lutte contre l’épidémie de la Covid-19, le nombre de vols de ménages enregistrés par la police a considérablement diminué entre mars et mai 2020. Mais à partir du déconfinement, le nombre de cambriolages a augmenté de 114%, selon le ministère de l’Intérieur.` }</p>
                        <p><strong>{ `Système d’alarme, caméra et télésurveillance.` }</strong>{ ` Aujourd’ hui, face aux nouvelles techniques de cambriolages toujours plus performantes, il est important de renforcer la sécurité autour de son habitation. L’installation d’une alarme maison peut servir à dissuader les cambrioleurs, à limiter le risque de vol et mieux vous protéger vous, ainsi que vos proches. Nous vous expliquons l’utilité, le fonctionnement et les avantages d’une alarme pour maison installée par ` }<strong>{ `AD CAM.` }</strong></p>
                    </ImagedArticle>
                </div>
                <div className={ classes.youtubeContainer }>
                    <YouTube videoId={ `gdeDCNWoMGg` } className={ "youtubeContainer" } />
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ ajaxAlarmOne } alt={ `Système d'alarme AJAX avec contrôle à distance et sirène` } isLeft={ true } title={ `Pourquoi choisir une alarme ?` }>
                        <p>{ `Lors d’un cambriolage, les délinquants passent ` }<strong>{ `une fois sur deux par la porte d’entrée.` }</strong>{ ` La solution longtemps apportée a donc été la porte blindée. Très onéreuse, elle ne garantit, cependant, pas forcément d’empêcher l’intrusion d’un cambrioleur.` }</p>
                        <p>{ `Idem pour les fenêtres où la meilleure solution reste l’installation de barreaux. Là encore, il faudra consacrer un budget assez important pour équiper son habitation.` }</p>
                        <p>{ `Et ensuite ? Les systèmes de blindages modernes, certes de plus en plus efficaces, ne sont qu’un ralentissement sur la route des voleurs. Une fois l’obstacle surmonté, ils auront tout le loisir de vider votre maison sans être dérangés.` }</p>
                    </ImagedArticle>
                </div>
            </div>
        </section>
    )
}
