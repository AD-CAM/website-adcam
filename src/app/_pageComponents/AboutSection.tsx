'use client'
/* Assets Imports */
import alarmeImage from 'public/accueil/alarmes.jpg'
import cameraImage from 'public/accueil/video-surveillance.jpg'
import accessImage from 'public/accueil/controle-acces.png'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { SectionTitle } from '../_components/SectionTitle'
import Image from 'next/image'



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
            alignItems: "center",

            boxSizing: "border-box",

            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
                width: "90%",
            },
            [theme.breakpoints.up('md')]: {
                justifyContent: "space-evenly",
                width: "100%",
            },
        },
        imageContainer: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            border: "2px solid",
            borderColor: "rgba(200, 4, 4, 1)",

            [theme.breakpoints.down('md')]: {
                visibility: "hidden",
            },
            [theme.breakpoints.up('md')]: {
                height: "160px",
                width: "160px",
            },
            [theme.breakpoints.up('lg')]: {
                height: "200px",
                width: "200px",
            },
        },
        imageSubContainer: {
            position: "absolute",
            
            boxSizing: "border-box",

            [theme.breakpoints.up('md')]: {
                width: "154px",
                height: "154px",
            },
            [theme.breakpoints.up('lg')]: {
                width: "194px",
                height: "194px",
            },
        },
        imageContainerWide: {
            position: "relative",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            border: "2px solid",
            borderColor: "rgba(200, 4, 4, 1)",

            [theme.breakpoints.down('md')]: {
                marginTop: theme.spacing(4),


                width: "80vw",
                height: "32vw",
            },
            [theme.breakpoints.up('md')]: {
                marginTop: theme.spacing(8),


                height: "220px",
                width: "545px",
            },
        },
        imageSubContainerWide: {
            position: "absolute",
            
            boxSizing: "border-box",

            [theme.breakpoints.down('md')]: {
                width: "79vw",
                height: "31vw",
            },
            [theme.breakpoints.up('md')]: {
                width: "539px",
                height: "214px",
            },
        },
        mainArticle: {
            [theme.breakpoints.down('md')]: {
                maxWidth: "100%",
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.up('md')]: {
                width: "50vw",
                maxWidth: "864px",
            },
        },
        textParagraph: {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
    
            color: "rgba(41, 41, 41, 1)",
        },
    }
})



export default function AboutSection() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div className={ classes.subRoot }>
                <aside className={ classes.imageContainer }>
                    <div className={ classes.imageSubContainer }>
                        <Image src={ accessImage } alt={ "Installation de systèmes d'alarmes automatiques" } fill={ true } style={{ objectFit: "cover" }} />
                    </div>
                </aside>
                <article className={ classes.mainArticle }>
                    <SectionTitle text={ "AD CAM, À propos" } />

                    <p className={ classes.textParagraph }>
                        { `AD CAM est une entreprise d’installation de sécurités pour les professionnels et particuliers.` }
                    </p>
                    <p className={ classes.textParagraph }>
                        { `Nos techniciens qualifiés étudient vos besoins et répondent à votre demande, `}
                        <strong>{ `nous installons du matériel certifié ` }</strong>
                        {`afin de `}
                        <strong>{ `garantir une sécurité optimale. ` }</strong>
                        {`Que vous soyez une entreprise ou un particulier, nous vous proposons de vous aider à trouver la
                        solution de sécurité adaptée à vos besoins.` }
                    </p>
                    <p className={ classes.textParagraph }>
                        { `Nous apportons des solutions adaptées aux artisans & commerçants, PME/PMI et collectivités
                        locales. En effet, pour avoir `}
                        <strong>{ `le meilleur dispositif de sécurité qui soit` }</strong>
                        {`, nos techniciens qualifiés procèdent à des `}
                        <strong>{ `études sur terrain afin d’évaluer les risques
                        d’insécurité ` }</strong>
                        {`liés à votre activité ou à vos biens. À l’issue de cette investigation, ils seront
                        à même de vous proposer les solutions d’installation de sécurités adaptées à vos besoins.` }
                    </p>
                    <p className={ classes.textParagraph }>
                        { `Nous installons vos caméras de vidéosurveillance/vidéoprotection dans votre habitation, commerce,
                        entreprise, parking, entrepôt ou tout autre lieu devant être protégé. `}
                        <strong>{ `Nous assurons l’assistance technique ` }</strong>
                        {`de vos alarmes et vidéo surveillance qui `}
                        <strong>{ `protège votre entreprise ou votre habitation.` }</strong>
                    </p>
                    <p className={ classes.textParagraph }>
                        { `Nous intervenons dans un rayon de ` }
                        <strong>{ `50 kilomètres autour d’Orléans` }</strong>
                        {`, (Beaugency, Blois, Châteaudun, Châteauneuf-sur-Loire, Fleury-les-Aubrais, La Ferté-Saint-Aubin, Mer,
                        Meung-sur-Loire, Montargis, Pithiviers, Saran, Sully-sur-Loire)` }
                    </p>
                </article>
                <aside className={ classes.imageContainer }>
                    <div className={ classes.imageSubContainer }>
                        <Image src={ alarmeImage } alt={ "Installation de systèmes d'alarmes automatiques" } fill={ true } style={{ objectFit: "cover" }} />
                    </div>
                </aside>
            </div>

            <aside className={ classes.imageContainerWide }>
                <div className={ classes.imageSubContainerWide }>
                    <Image src={ cameraImage } alt={ "Installation de systèmes d'alarmes automatiques" } fill={ true } style={{ objectFit: "cover" }} />
                </div>
            </aside>
        </section>
    )
}
