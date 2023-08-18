'use client'
/* Assets Imports */
import adCamFullLogo from "public/ad-cam_logo-title_nobg.png"
import ajaxAlarmOne from "public/ajax-image_one.png"
import ajaxAlarmTwo from "public/ajax-image_two.png"
import nfa2pNorm from "public/norme_nfa2p.png"
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
import YouTube from "react-youtube"
/* Components Imports */
import { SectionTitle, ImageTitle } from '../../_components/SectionTitle'
import ImagedArticle from '../../_components/ImagedArticle'
import { useMediaQuery, useTheme } from "@mui/material"
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
            },
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
                width: "650px",
                maxWidth: "90%",
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
                    <SectionTitle text={ "Installation d'alarmes" } />
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
                <div className={ classes.sectionTitleHolder }>
                    <ImageTitle image={ adCamFullLogo } alt={ `AD CAM, Installateur de systèmes de télésurveillance à Orléans` } width={ "350px" } />
                </div>
                <div className={ classes.textContainer }>
                    <p className={ classes.textParagraph }>{ `C’est à ce moment que l’alarme se révèle comme une solution très efficace. Présente aux points de passage de la maison ou de votre commerce, aux entrées principales et aux points sensibles, elle permet, selon les modèles, de détecter les mouvements ou lorsqu’une ouverture est forcée.` }</p>
                    <p className={ classes.textParagraph }><strong>{ `9 fois sur 10, un cambrioleur part immédiatement s’il déclenche une alarme` }</strong>{ ` et les plus téméraires ne restent jamais plus de 2 min. Certains systèmes sophistiqués sont équipés directement sur les détecteurs d’une caméra de surveillance ce qui facilite la levée de doute à distance et qui permet ainsi d’identifier le cambrioleur et d’appeler directement les forces de l’ordre.` }</p>
                    <p className={ classes.textParagraph }>{ `Une alarme ne vous empêche pas de sécuriser les ouvertures et points sensibles, comme les portes et les fenêtres. Cela doit en revanche se faire complémentairement à l’installation d’un système d’alarme. Le devis pour sécuriser les portes et les fenêtres d’une maison a souvent de quoi donner des sueurs froides au client. Plusieurs milliers d’euros pour une porte et plusieurs centaines pour sécuriser une seule fenêtre.` }</p>
                    <p className={ classes.textParagraph }>{ `Le ` }<strong>{ `marché de l’alarme` }</strong>{ ` propose aujourd’hui des solutions aux ` }<strong>{ `coûts beaucoup plus raisonnables` }</strong>{ ` et dont l’ efficacité finale n’a rien à envier aux meilleurs protections physiques, au contraire.` }</p>
                    <p className={ classes.textParagraph }>{ `Pour la majorité des maisons, l’installation complète d’une alarme habitation se compose en moyenne de 2 détecteurs infrarouges ainsi que d’un équipement pour la porte. Ce kit d’alarme permettra de couvrir toutes les zones de passage importantes de la maison. Par ailleurs, il existe aujourd’hui des solutions pour s’adapter à la présence d’animaux domestiques. Nous effectuons alors un diagnostic plus précis. Dans ce cas, en général, plusieurs solutions s’offrent à vous : soit la mise en place de contacteurs d’ouverture uniquement sur les ouvrants, soit des détecteurs de mouvement spécifiques qui ne déclencheront pas l’alarme de manière intempestive lors de la balade de vos animaux dans votre domicile.` }</p>
                </div>
                <div className={ classes.articleContainer }>
                    <ImagedArticle image={ nfa2pNorm } alt={ `Certification normé NFA2P` } isLeft={ false } title={ `La norme NFA29 ou EN50131, un gage de très haute qualité` }>
                        <p>{ `Une alarme, en tant qu’équipement de protection de votre maison contre les vols et le cambriolage, doit répondre à certaines normes de sécurité. Les modèles que vous pouvez installer dans votre habitation afin de la sécuriser sont certifiés par des organismes français ou européens. C’est le cas notamment de la certification ` }<strong>{ `NF A2P` }</strong>{ ` qui concerne un grand nombre de matériels de protection de votre logement.` }</p>
                        <p>{ `Les fabricants qui obtiennent la certification NFA2P proposent aux consommateurs des équipements de protection avec un ` }<strong>{ `très haut degré de sécurité.` }</strong>{ ` Les alarmes conformes à cette norme française ont l’avantage de garantir une parfaite résistance aux tentatives de neutralisation comme par exemple la destruction, la désactivation, l’arrachement ou encore le brouillage. Un tel niveau de sécurité assuré est possible grâce aux diverses vérifications effectuées. En plus des tests en laboratoire et des contrôles périodiques en vue de maintenir la certification, un audit des sites de fabrication est également réalisé. Toutes ces différentes vérifications constituent une preuve irréfutable du niveau élevé de sécurité des alarmes certifiés NF A2P. C’est pourquoi cette certification est exigée par les compagnies d’assurances.` }</p>
                    </ImagedArticle>
                </div>
                <div className={ classes.contactUsArea }>
                    <h3 className={ classes.contactUsTitle }>
                        { `Nos solutions en matière d'alarme vous intéressent ? AD CAM est à votre disposition pour vous conseiller et vous transmettre une estimation des coûts gratuite ! Nous intervenons dans un rayon de 50 kilomètres autour d'Orléans.` }
                    </h3>
                    <IconButton icon={ "invoice" } text={ `Devis 100% gratuit` } link={ "/contact" } description={ `Contactez-nous pour obtenir un devis 100% gratuit` }/>
                </div>
            </div>
        </section>
    )
}
