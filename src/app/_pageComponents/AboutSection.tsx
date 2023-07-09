'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */



const useStyles = makeStyles()((theme) => {
    return {
        root: {
        },
    }
})



export default function AboutSection() {
    const { classes } = useStyles()

    return (      
        <section className={ classes.root }>
            <div>
                <aside></aside>
                <article>
                    <p>
                        { `AD CAM est une entreprise d’installation de sécurités pour les professionnels et particuliers.` }
                    </p>
                    <p>
                        { `Nos techniciens qualifiés étudient vos besoins et répondent à votre demande, nous installons
                        du matériel certifié afin de garantir une sécurité optimale. Que vous soyez une entreprise ou
                        un particulier, nous vous proposons de vous aider à trouver la solution de sécurité adaptée à
                        vos besoins.` }
                    </p>
                    <p>
                        { `Nous apportons des solutions adaptées aux artisans & commerçants, PME/PMI et collectivités
                        locales. En effet, pour avoir le meilleur dispositif de sécurité qui soit, nos techniciens
                        qualifiés procèdent à des études sur terrain afin d’évaluer les risques d’insécurité liés à
                        votre activité ou à vos biens. À l’issue de cette investigation, ils seront à même de vous
                        proposer les solutions d’installation de sécurités adaptées à vos besoins.` }
                    </p>
                    <p>
                        { `Nous installons vos caméras de vidéosurveillance/vidéoprotection dans votre habitation, commerce,
                        entreprise, parking, entrepôt ou tout autre lieu devant être protégé. Nous assurons l’assistance
                        technique de vos alarmes et vidéo surveillance qui protège votre entreprise ou votre habitation.` }
                    </p>
                    <p>
                        { `Nous intervenons dans un rayon de 50 kilomètres autour d’Orléans, (Beaugency, Blois, Châteaudun, Châteauneuf-sur-Loire,
                        Fleury-les-Aubrais, La Ferté-Saint-Aubin, Mer, Meung-sur-Loire, Montargis, Pithiviers, Saran, Sully-sur-Loire)` }
                    </p>
                </article>
                <aside></aside>
            </div>

            <aside></aside>
        </section>
    )
}
